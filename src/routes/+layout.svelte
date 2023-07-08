<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar, Modal, Toast } from '@skeletonlabs/skeleton';

    
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
	}

</script>

<Modal zIndex="98" />
<Toast zIndex="99" />

<AppShell>
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotTrail="place-content-end">
			<svelte:fragment slot="lead">(Logo)</svelte:fragment>
			<svelte:fragment slot="trail">
				    <FileButton name="photo" accept="image/*" capture="environment" on:change={(e)=>onFileSelected(e)} bind:this={fileinput}>camera</FileButton>
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
		<div class="h-15 bg-surface-800 flex">
			<div class="flex justify-center w-[50dvw] p-1">
				<button type="button" class="btn-icon btn-icon-xl variant-filled rounded-md">(icon)</button>
			</div>

			<div class="flex justify-center w-[50dvw] p-1">
				<button type="button" class="btn-icon btn-icon-xl variant-filled rounded-md">(icon)</button>
			</div>
		</div>
	</svelte:fragment>
</AppShell>