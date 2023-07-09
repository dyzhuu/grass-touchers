<script lang="ts">
	import Map from '$lib/Map.svelte';
	import { getVisitedLocations } from '$lib/client/api';
	import camera from '$lib/public/camera.png';

	getVisitedLocations().then(console.log);

	function setCamera(): void {
		const cameraInput = document.getElementById('cameraInput') as HTMLInputElement;
		cameraInput.click();
	}

	let picture: string | null;
	let fileinput;

	const onFileSelected = (e: any) => {
		let image = e.target.files![0];
		let reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onload = (e) => {
			if (typeof e.target!.result === 'string') {
				picture = e.target!.result;
			}
		};
		// some function here to pass the photo to the image recognition API
		// wait for successful reply
		let gainedPoints = 0;
		if (gainedPoints > 0) {
			alert(`Congratulations, you have gained ${gainedPoints} points!`)
		} else {
			alert("You are not in a valid area.");
		}
	}
</script>

<div class="relative flex justify-center items-center w-[100dvw] h-full p-3">
	<Map />
	<div class="ml-10 mb-3 absolute bottom-0 left-0">
		<input id="cameraInput" class="hidden" type="file" name="photo" accept="image/*" capture="environment" on:change={(e) => onFileSelected(e)} bind:this={fileinput}/>
		<button type="button" class="btn-icon btn-icon-lg bg-[#595959] hover:bg-[#5e5e5e]" on:click={setCamera}>
			<img alt="logo" src={camera} class="absolute left h-[25px]" />
		</button>
	</div>
</div>
