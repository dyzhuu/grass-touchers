<script lang="ts">
	import Map from '$lib/Map.svelte';
	import { getVisitedLocations } from '$lib/client/api';

	getVisitedLocations().then(console.log);
</script>

<div class="flex justify-center items-center w-[100dvw] h-full p-3">
	<Map />
</div>
