<script lang='ts'>
	import logo from '$lib/public/LandingLogo.png'
	import { signInWithGoogle } from '$lib/client/firebase';
	let screenSize: any;
</script>

<svelte:window bind:innerWidth={screenSize} />


<div class="bg-surface-700 grid-cols-2 flex h-[100dvh] sm:gap-x-12" id="diagonal">
	{#if screenSize >= 768}
		<div class="h-[100dvh] flex grow justify-center items-center">
		<img src={logo} class="w-[60dvw] translate-y-[40px]" id="leftSlide">
		</div>
		<div class="bg-surface-900 h-[100dvh] w-[40dvw] flex flex-col justify-center gap-y-10 px-10" id="rightSlide">
			<p class="font-extrabold text-3xl mx-auto">Touch grass today.</p>
			<button class="btn bg-primary-500 py-5 w-full" on:click={signInWithGoogle}>Sign in with Google </button>
		</div>
	{/if}
	{#if screenSize < 768}
			<div class="h-[100dvh] pt-[25dvh] flex flex-col mx-auto gap-y-5">
			<img src={logo} class="w-[95dvw]" id="topSlide">
			<button class="btn bg-primary-500 py-5" id="bottomSlide" on:click={signInWithGoogle}>Sign in with Google </button>
		</div>
	{/if}
</div>

<style>
	#diagonal{
		background-image: -webkit-linear-gradient(45deg, #3b372d 40%, #5c6556 40%);
		}

	  #leftSlide {
	animation: 1s ease-out 0s 1 slideInLeft;
  }
	  #rightSlide {
	animation: 1s ease-out 0s 1 slideInRight;
  }
	  #topSlide {
	animation: 1s ease-out 0s 1 slideInTop;
  }
	  #bottomSlide {
	animation: 1s ease-out 0s 1 slideInBottom;
  }
	@keyframes slideInLeft {
  0% {
    transform: translateX(-100%);
	opacity: 0%;
  }
  100% {
    transform: translateX();
	opacity: 100%;
  }
}	
	@keyframes slideInRight {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX();
  }
}

@keyframes slideInTop {
  0% {
    transform: translateY(-60%);
	opacity: 0%;
  }
  100% {
    transform: translateY(0);
	opacity: 100%;
  }
}

@keyframes slideInBottom {
  0% {
    transform: translateY(200%);
	opacity: 0%;
  }
  100% {
    transform: translateY();
	opacity: 100%;
  }
}
</style>