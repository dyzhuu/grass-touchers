
<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../../app.postcss';

	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	import {page} from "$app/stores";

    $: isMap = $page.url.pathname == '/play';
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
					<button type="button" class="btn w-full rounded-md {isMap ? 'bg-primary-800': 'bg-primary-500'}" >Map</button>
				</div>
			</a>

			<a data-sveltekit-reload href="/play/leaderboard">
				<div class="flex justify-center w-[50dvw] h-full p-1">
					<button type="button" class="btn w-full rounded-md {isMap ? 'bg-primary-500': 'bg-primary-800'}">Lea</button>
				</div>
			</a>
		</div>
	</svelte:fragment>
</AppShell>