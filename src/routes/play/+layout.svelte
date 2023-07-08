
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
	import camera from '$lib/public/camera-solid.svg';
	import whiteCamera from '$lib/public/camera-solid (1).svg';
	import MenuNavigation from '$lib/component/MenuNavigation.svelte';

    $: isMap = $page.url.pathname == '/play';

	function drawerOpen(): void {
		drawerStore.open();
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
			<img src={logoWhite} class="h-[50px]">
			<svelte:fragment slot="trail">
				<button type="button" class="btn-icon btn-icon-lg bg-primary-500 hover:bg-primary-800">
					<input class="h-full w-full opacity-0 z-50" type="file" name="photo" accept="image/*" capture="environment" on:change={(e)=>onFileSelected(e)} bind:this={fileinput} />
				</button>
			</svelte:fragment>
		</AppBar>
		<svg class="absolute pointer-events-none right-0 h-[34px] -translate-y-[60px] -translate-x-[25px]" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
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
					<button type="button" class="btn w-full rounded-md {isMap ? 'bg-primary-800': 'bg-primary-500'}" >
						<svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>
					</button>
				</div>
			</a>

			<a data-sveltekit-reload href="/play/leaderboard">
				<div class="flex justify-center w-[50dvw] h-full p-1">
					<button type="button" class="btn w-full rounded-md {isMap ? 'bg-primary-500': 'bg-primary-800'}">
						<svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M353.8 54.1L330.2 6.3c-3.9-8.3-16.1-8.6-20.4 0L286.2 54.1l-52.3 7.5c-9.3 1.4-13.3 12.9-6.4 19.8l38 37-9 52.1c-1.4 9.3 8.2 16.5 16.8 12.2l46.9-24.8 46.6 24.4c8.6 4.3 18.3-2.9 16.8-12.2l-9-52.1 38-36.6c6.8-6.8 2.9-18.3-6.4-19.8l-52.3-7.5zM256 256c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32V288c0-17.7-14.3-32-32-32H256zM32 320c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zm416 96v64c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32V416c0-17.7-14.3-32-32-32H480c-17.7 0-32 14.3-32 32z"/></svg>
					</button>
				</div>
			</a>
		</div>
	</svelte:fragment>
</AppShell>