<script lang='ts'>
	import logo from '$lib/public/LandingLogo.png'
	import { signInWithGoogle } from '$lib/client/firebase';
	let screenSize: any;
</script>

<svelte:window bind:innerWidth={screenSize} />


<div class="bg-surface-700 grid-cols-2 flex h-[100dvh] sm:gap-x-12" id="diagonal">
	{#if screenSize >= 768}
		<div class="h-[100dvh] flex grow justify-center items-center">
		<img src={logo} class="w-[60dvw] translate-y-[40px]">
		</div>
		<div class="bg-surface-900 h-[100dvh] w-[40dvw] flex flex-col justify-center gap-y-10 px-10">
			<p class="font-extrabold text-3xl mx-auto">Touch grass today.</p>
			<button class="btn bg-primary-500 w-full" on:click={signInWithGoogle}>Sign in with Google </button>
		</div>
	{:else}
		<div class="h-[100dvh] pt-[30dvh] flex flex-col mx-auto gap-y-10">
			<img src={logo} class="w-[60dvw]">
			<button class="btn bg-primary-500" on:click={signInWithGoogle}>Sign in with Google </button>
		</div>
	{/if}
</div>

<style>
	#diagonal{
		background-image: -webkit-linear-gradient(45deg, #3b372d 40%, #5c6556 40%);
		}
</style>