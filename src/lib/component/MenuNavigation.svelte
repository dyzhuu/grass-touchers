<script lang="ts">
	import {page} from "$app/stores";
	import { drawerStore } from '@skeletonlabs/skeleton';
	import profile from "$lib/public/profile.png";
	import settings from "$lib/public/settings.png";
	import leaderboard from "$lib/public/leaderboard.png";
	import logout from "$lib/public/logout.png";

    $: pathName = $page.url.pathname;

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav class="h-full p-4 bg-[#545751]">
	<ul>
		<li>
			<a href="/menu/profile" on:click={drawerClose}>
				<div class="rounded-lg p-2 hover:bg-[#282928]">
					<img alt="profile" src={profile} class="inline mr-5 h-[50px]">
					<span class="font-mono text-xl font-bold">Profile</span>
				</div>
			</a>
		</li>
		<li class="{pathName == "/play" ? 'hidden': 'block'}">
			<a href="/play" on:click={drawerClose}>
				<div class="rounded-lg p-2 hover:bg-[#282928]">
					<svg xmlns="http://www.w3.org/2000/svg" height="3em" class="inline mr-5 h-[50px]" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>
					<span class="font-mono text-xl font-bold">Play</span>
				</div>
			</a>
		</li>
		<li class="{pathName == "/play/leaderboard" ? 'hidden': 'block'}">
			<a href="play/leaderboard" on:click={drawerClose}>
				<div class="rounded-lg p-2 hover:bg-[#282928]">
					<img alt="leaderboard" src={leaderboard} class="inline mr-5 h-[50px]">
					<span class="font-mono text-xl font-bold">Leaderboard</span>
				</div>
			</a>
		</li>
		<li>
			<a href="/menu/settings" on:click={drawerClose}>
				<div class="rounded-lg p-2 hover:bg-[#282928]">
					<img alt="settings" src={settings} class="inline mr-5 h-[50px]">
					<span class="font-mono text-xl font-bold">Settings</span>
				</div>
			</a>
		</li>
		<li>
			<a href="/" on:click={drawerClose}>
				<div class="rounded-lg p-2 hover:bg-[#282928]">
					<img alt="logout" src={logout} class="inline mr-5 h-[50px]">
					<span class="font-mono text-xl font-bold">Log Out</span>
				</div>
			</a>
		</li>
	</ul>
</nav>