<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import SignInButton from '$lib/auth/SignInButton.svelte';
	import logo from '$lib/public/LandingLogo.png';
	import { firebaseReady, userProfile } from '$lib/stores';
	let screenSize: number;

	$: if ($firebaseReady && $userProfile && browser) goto('/play');
</script>

<svelte:window bind:innerWidth={screenSize} />

<div class="bg-surface-700 grid-cols-2 flex h-[100dvh] sm:gap-x-12" id="diagonal">
	{#if screenSize >= 768}
		<div class="h-[100dvh] flex grow justify-center items-center">
			<img src={logo} class="w-[60dvw] translate-y-[40px]" alt="logo" />
		</div>
		<div
			class="bg-surface-900 h-[100dvh] w-[40dvw] flex flex-col justify-center gap-y-10 px-10"
			id="rightSlide"
		>
			<p class="font-extrabold text-3xl mx-auto">Touch grass today.</p>
			<SignInButton />
		</div>
	{:else}
		<div class="h-[100dvh] pt-[25dvh] flex flex-col mx-auto gap-y-5">
			<img src={logo} class="w-[95dvw]" alt="logo" />
			<SignInButton />
		</div>
	{/if}
</div>

<style>
	#diagonal {
		background-image: -webkit-linear-gradient(45deg, #3b372d 40%, #5c6556 40%);
	}
</style>
