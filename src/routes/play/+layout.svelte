
<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../../app.postcss';

	import { AppShell, AppBar, drawerStore, Drawer } from '@skeletonlabs/skeleton';

	import {page} from "$app/stores";
	import logoBlack from "$lib/public/logoBlack.png";
	import logoWhite from "$lib/public/logoWhite.png";
	import leaderboard from "$lib/public/leaderboard.png";
	import camera from '$lib/public/camera.png';
	import MenuNavigation from '$lib/component/MenuNavigation.svelte';

	// TODO: remove later since adding 3 navbar buttons
    $: isMap = $page.url.pathname == '/play';

	function drawerOpen(): void {
		drawerStore.open();
	}

	function setCamera(): void {
		const cameraInput = document.getElementById("cameraInput") as HTMLInputElement;
		cameraInput.click();
	}

	let picture: string | null;
    let fileinput;

	const onFileSelected = (e: any) => {
		let image = e.target.files![0];
		let reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onload = e => {
			if (typeof e.target!.result === "string") {
				picture = e.target!.result
			};
		}
		// some function here to pass the photo to the image recognition API
		// wait for successful reply
	}
</script>

<Drawer width="w-[50dvw]">
	<MenuNavigation />
</Drawer>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">
				<button class="btn btn-sm mr-4" on:click={drawerOpen}>
					<span>
						<svg xmlns="http://www.w3.org/2000/svg" height="2.5em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
					</span>
				</button>
			</svelte:fragment>

			<img alt="logo" src={logoWhite} class="h-[50px]">
			
			<svelte:fragment slot="trail">
				<button type="button" class="btn-icon btn-icon-lg bg-[#595959] hover:bg-[#5e5e5e]" on:click={setCamera}>
					<img alt="logo" src={camera} class="absolute left h-[25px]">
				</button>
				<input id="cameraInput" class="hidden" type="file" name="photo" accept="image/*" capture="environment" on:change={(e)=>onFileSelected(e)} bind:this={fileinput} />
			</svelte:fragment>

		</AppBar>
	</svelte:fragment>
	<!-- (sidebarLeft) -->
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<svelte:fragment slot="footer"> 
		<div class="h-20 flex ">
			<a href="/play">
				<div class="flex justify-center h-full w-[50dvw] p-1">
					<button type="button" class="btn w-full rounded-md {isMap ? 'bg-[#47573b]': 'bg-[#7c9967]'}" >
						<svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>
					</button>
				</div>
			</a>

			<a data-sveltekit-reload href="/play/leaderboard">
				<div class="flex justify-center w-[50dvw] h-full p-1">
					<button type="button" class="btn w-full rounded-md {isMap ? 'bg-[#7c9967]': 'bg-[#47573b]'}">
						<img alt="leaderboard" src={leaderboard} class="h-[50px]">
					</button>
				</div>
			</a>
		</div>
	</svelte:fragment>
</AppShell>