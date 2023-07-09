<script lang="ts">
	import Map from '$lib/Map.svelte';
	import { ApiError, getVisitedLocations } from '$lib/client/api';
	import camera from '$lib/public/camera.png';
	import { currentArea } from '$lib/stores';
	import { toastStore } from '@skeletonlabs/skeleton';
	import { get } from 'svelte/store';
	import { uploadImage } from '$lib/client/api';

	getVisitedLocations().then(console.log);

	function setCamera(): void {
		const cameraInput = document.getElementById('cameraInput') as HTMLInputElement;
		cameraInput.click();
	}

	let fileinput;

	const onFileSelected = (
		e: Event & {
			currentTarget: EventTarget & HTMLInputElement;
		}
	) => {
		if (get(currentArea) == null) {
			toastStore.trigger({
				message: "Can't score if your not in a grassy area"
			});
			return;
		}
		let image = e.currentTarget.files![0];
		let reader = new FileReader();
		reader.readAsArrayBuffer(image);
		reader.onload = async (e) => {
			if (e.target!.result instanceof ArrayBuffer) {
				try {
					toastStore.trigger({
						message: `Scored ${await uploadImage(get(currentArea)!, e.target!.result)} points`
					});
				} catch (ex) {
					if (ex instanceof ApiError) {
						toastStore.trigger({ message: ex.kind });
					} else {
						toastStore.trigger({ message: 'Unknown error' });
					}
				}
			}
		};
	};
</script>

<div class="relative flex justify-center items-center w-[100dvw] h-full p-3">
	<Map />
	<div class="ml-10 mb-3 absolute bottom-0 left-0">
		<input
			id="cameraInput"
			class="hidden"
			type="file"
			name="photo"
			accept="image/*"
			capture="environment"
			on:change={(e) => onFileSelected(e)}
			bind:this={fileinput}
		/>
		<button
			type="button"
			class="btn-icon btn-icon-lg bg-[#595959] hover:bg-[#5e5e5e]"
			on:click={setCamera}
		>
			<img alt="logo" src={camera} class="absolute left h-[25px]" />
		</button>
	</div>
</div>
