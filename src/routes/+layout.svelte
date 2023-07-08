<AppShell>
	<svelte:fragment slot="header">
	<AppBar gridColumns="grid-cols-3" slotTrail="place-content-end">
		<svelte:fragment slot="lead"><h1 id="titleLogo">Grass Touchers</h1></svelte:fragment>
		<svelte:fragment slot="trail"><button id="cameraButton" on:click={uploadPicture}>Camera</button></svelte:fragment>
	</AppBar>
	</svelte:fragment>

	<slot />

	<svelte:fragment slot="footer">
		<div class="footer">
			<button id="mapButton" class="selected" type="button" on:click={function() {switchPage("map")}}>
				<span>(icon)</span>
				<span>Map</span>
			</button>
			<button id="leaderboardButton" type="button" on:click={function() {switchPage("leaderboard")}}>
				<span>(icon)</span>
				<span>Leaderboard</span>
			</button>
		</div>
	</svelte:fragment>
</AppShell>

<style>
    .footer {
        display: grid;
        grid-template-columns: 50% 50%;
    }
    .footer button {
        padding: 1rem;
        background-color: #8b8a8a;
		color: white;
		font-weight: bold;
		font-family: "Verdana";
		font-size: 1rem;
    }
    .footer button.selected {
        background-color: #538989;
    }
    .footer button:hover {
        background-color: #416a6a;
    }

	#titleLogo {
		font-family: "Montserrat";
		font-size: 2rem;
	}

	#cameraButton {
		padding: 0.5rem;
		border-radius: 0.5rem;
		background-color: lightgray;
		color: black;
	}
</style>

<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar, Modal, Toast } from '@skeletonlabs/skeleton';

	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	import {page} from "$app/stores";

	$: map = $page.url.pathname == "/play";
	$: leaderboard = $page.url.pathname == "/play/leaderboard";

	$: console.log(map);
	
</script>


<AppShell>
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotTrail="place-content-end">
			<svelte:fragment slot="lead">(Logo)</svelte:fragment>
			<svelte:fragment slot="trail">(Camera)</svelte:fragment>
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
					<button type="button" class="btn w-full rounded-md text-black {map ? 'bg-primary-800' : 'bg-primary-500'}" >Map</button>
				</div>
			</a>

			<a data-sveltekit-reload href="/play/leaderboard">
				<div class="flex justify-center w-[50dvw] h-full p-1">
					<button type="button" class="btn w-full rounded-md {leaderboard ? 'bg-primary-500': 'bg-primary-800'}">L</button>
				</div>
			</a>
		</div>
	</svelte:fragment>
</AppShell>