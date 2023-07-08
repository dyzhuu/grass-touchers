<script lang="ts">
	import { PUBLIC_MAPS_API_KEY as apiKey } from '$env/static/public';
	import { Loader } from '@googlemaps/js-api-loader';

	function map(div: HTMLDivElement) {
		const loader = new Loader({
			apiKey,
			version: 'weekly'
		});

		const position = { lat: -25.344, lng: 131.031 };

		(async () => {
			const { Map } = await loader.importLibrary('maps');

			let map = new Map(div, {
				zoom: 4,
				center: position,
				mapId: 'DEMO_MAP_ID'
			});
		})();
	}
</script>

<div use:map class="w-full h-full" />
