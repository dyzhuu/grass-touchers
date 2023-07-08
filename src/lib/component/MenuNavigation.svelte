<script lang="ts">
	import { drawerStore } from '@skeletonlabs/skeleton';

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4">
	<ul>
		<li><a href="/menu/profile" on:click={drawerClose}>Profile</a></li>
		<li><a href="/menu/settings" on:click={drawerClose}>Settings</a></li>
		<li><a href="/play" on:click={drawerClose}>Log Out</a></li>
	</ul>
</nav>