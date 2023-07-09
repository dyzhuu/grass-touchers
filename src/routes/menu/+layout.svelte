<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../../app.postcss';

	import { AppShell, AppBar, drawerStore, Drawer } from '@skeletonlabs/skeleton';

	import { page } from '$app/stores';
	import logoBlack from '$lib/public/logoBlack.png';
	import logoWhite from '$lib/public/logoWhite.png';
	import leaderboard from '$lib/public/leaderboard.png';
	import camera from '$lib/public/camera.png';
	import MenuNavigation from '$lib/component/MenuNavigation.svelte';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { firebaseReady, userProfile } from '$lib/stores';

	$: if ($firebaseReady && !$userProfile && browser) goto('/');

	// TODO: remove later since adding 3 navbar buttons
	$: isMap = $page.url.pathname == '/play';

	function drawerOpen(): void {
		drawerStore.open();
	}

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
	};
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
						<svg xmlns="http://www.w3.org/2000/svg" height="2.5em" viewBox="0 0 448 512"
							><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
							<!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
							<!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
							<style>
								svg {
									fill: #ffffff;
								}
							</style><path
								d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
							/></svg
						>
					</span>
				</button>
			</svelte:fragment>

			<img alt="logo" src={logoWhite} class="h-[50px]" />

			<svelte:fragment slot="trail">
				<button
					type="button"
					class="btn-icon btn-icon-lg bg-[#595959] hover:bg-[#5e5e5e]"
					on:click={setCamera}
				>
					<img alt="logo" src={camera} class="absolute left h-[25px]" />
				</button>
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
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- (sidebarLeft) -->
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	{#if browser}
		<slot />
	{/if}
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
</AppShell>
