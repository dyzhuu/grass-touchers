<script lang="ts">
	import Map from '$lib/Map.svelte';
	import { userProfile } from '$lib/stores';
</script>

{#if $userProfile}
	<div class="flex justify-center items-center w-[100dvw] h-full p-3">
		<Map />
	</div>
{/if}
