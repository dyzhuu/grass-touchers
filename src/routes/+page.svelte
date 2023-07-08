<div class="wrapper">
	<div class="map">
		<div class="locationContent">
			<button id="locationButton" on:click={getUserCoordinates}>
				<span>Get Location</span>
			</button>
			<p id="locationText">Latitude:? Longitude:?</p>
		</div>
	</div>
</div>

<style>
	.wrapper {
		height: 100%;

		display: grid;
	}
	.map {
		margin: 3%;

		display: flex;
		justify-content: center;
		align-items: center;

		border: 5px solid #818080;
		text-align: center;
	}
	#locationButton {
		padding: 0.5rem;
		border-radius: 0.5rem;
		background-color: lightgray;
		color: black;
	}
</style>

<script>
	// Check if user's coordinates is in grid
	// Get user's coordinates
	// If in, turn green, if not turn red
	// When green, allow user to take pictures, if red, don't allow user to take pictures
	// Silo Park: 5175ed36d028d86540595ceb45eb826b42c0f00102f901a8bdef220000000092030953696c6f205061726b
	// Waiatarau / Victoria Park: 5123f0938e21d86540594e3cbcbc676c42c0f00102f90170bb790000000000920319576169617461726175202f20566963746f726961205061726b
	// Albert Park: 51e2534a0691d86540593bf20dd9d56c42c0f00101f901620c93000000000092030b416c62657274205061726b
	// Pukekawa / Auckland Domain: 513d239287cfd8654059782dfb49016e42c0f00102f9015f025c000000000092031a50756b656b617761202f204175636b6c616e6420446f6d61696e
	// Testing - OGGB: 519065e8e5add8654059bd691fe0346d42c0f00102f901bb986c010000000092031c4f77656e20472e20476c656e6e204275696c64696e67202832363029

	function getUserCoordinates() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
			(position) => {
				const latitude = position.coords.latitude;
				const longitude = position.coords.longitude;
				const locationText = document.getElementById("locationText");

				// Display coordinates
				// @ts-ignore
				locationText.textContent = `Latitude: ${latitude} Longitude: ${longitude}`;
			},
			(error) => {
				console.error("Error getting user coordinates:", error.message);
			}
			);
		} else {
			console.error("Geolocation is not supported by this browser.");
		}
	}
</script>