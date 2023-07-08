<script lang="ts">
	import { signInWithGoogle } from '$lib/client/firebase';
</script>

<div>
	<h1>Welcome to Grass Touchers</h1>

	<button class="btn" on:click={signInWithGoogle}>Sign in with google </button>
</div>
