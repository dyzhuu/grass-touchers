<script lang="ts">
	import { PUBLIC_MAPS_API_KEY as apiKey } from '$env/static/public';
	import { Loader } from '@googlemaps/js-api-loader';
	import { getLocations, getVisitedLocations } from './client/api';
	import recentre from '$lib/public/recentre.png';
	import { currentArea } from './stores';

	// Constants
	const RED = '#c40f18';
	const GREEN = '#00FF00';
	const GRAY = '#969696';

	// Globals
	var userPosition: number[];
	var main_map: google.maps.Map;

	function getUserPosition(): Promise<[number, number]> {
		return new Promise((res, rej) => {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					(position) => {
						res([position.coords.latitude, position.coords.longitude]);
					},
					(error) => {
						rej(error);
					}
				);
			} else {
				rej(new Error('Geolocation is not supported by this browser.'));
			}
		});
	}

	function updateMarker(marker: google.maps.Marker) {
		const new_latlng = new google.maps.LatLng(userPosition[0], userPosition[1]);
		marker.setPosition(new_latlng);
		// for debugging
		// console.log(userPosition, 'hello');
		// const new_latlng = new google.maps.LatLng(marker.getPosition().lat() + 1, marker.getPosition().lng() + 1);
	}

	async function updateRegion(parks: google.maps.Polygon[]) {
		// Logic for user detection in region
		const currentPosition = new google.maps.LatLng(userPosition[0], userPosition[1]);
		let visited = new Set((await getVisitedLocations()).map((element) => element.area_id));

		$currentArea = null;

		parks.forEach((park) => {
			let area_id = park.get('area_id');
			if (visited.has(area_id)) {
				$currentArea = area_id;
				park.setOptions({ fillColor: GRAY });
			} else if (google.maps.geometry.poly.containsLocation(currentPosition, park)) {
				park.setOptions({ fillColor: RED });
			}
		});
	}

	function reCentreMap(userPosition: number[], main_map: google.maps.Map) {
		const userLatLng = new google.maps.LatLng(userPosition[0], userPosition[1]);
		main_map.setCenter(userLatLng);
		main_map.setZoom(14);
	}

	function map(div: HTMLDivElement) {
		const interval = 3;
		const loader = new Loader({
			apiKey,
			version: 'weekly'
		});

		(async () => {
			const { Map } = await loader.importLibrary('maps');

			//const { Marker } = await loader.importLibrary("marker");

			userPosition = await getUserPosition();

			const position = new google.maps.LatLng(userPosition[0], userPosition[1]);

			main_map = new Map(div, {
				zoom: 14,
				center: position,
				mapId: 'DEMO_MAP_ID'
			});

			let user_position_marker = new google.maps.Marker({ position: position, title: 'YOU!' });

			user_position_marker.setMap(main_map);

			// loop this for each park
			let allParks = await getLocations();

			let allParksMap: google.maps.Polygon[] = [];
			Object.entries(allParks).forEach(([parkName, { boundary: park, id }]) => {
				let parkCoords: google.maps.LatLng[] = [];

				park.forEach((element) => {
					parkCoords.push(new google.maps.LatLng(element.lat, element.lng));
				});

				// Construct the polygon.
				const parkMap = new google.maps.Polygon({
					paths: parkCoords,
					strokeColor: 'black',
					strokeOpacity: 0.8,
					strokeWeight: 2,
					fillColor: GREEN,
					fillOpacity: 0.35
				});

				parkMap.set('area_id', id);

				parkMap.setMap(main_map);

				allParksMap.push(parkMap);
			});

			// Repeated events
			async function refreshPosition() {
				const new_pos = await getUserPosition();
				userPosition = new_pos;

				updateMarker(user_position_marker);

				updateRegion(allParksMap);

				setTimeout(refreshPosition, 1000 * interval);
			}
			refreshPosition();
		})();
	}
</script>

<div use:map id="map" class="m-5 w-full h-full" />
<div class="ml-10 mb-3 absolute bottom-0 left-[75px]">
	<button
		type="button"
		class="btn-icon btn-icon-lg bg-[#595959] hover:bg-[#5e5e5e]"
		on:click={function () {
			reCentreMap(userPosition, main_map);
		}}
	>
		<img alt="logo" src={recentre} class="absolute left h-[25px]" />
	</button>
</div>
