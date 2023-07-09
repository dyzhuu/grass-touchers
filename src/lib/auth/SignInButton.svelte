<script>
	import { signInWithGoogle } from '$lib/client/firebase';
	import { user, userProfile } from '$lib/stores';
	import { toastStore } from '@skeletonlabs/skeleton';
	import { ApiError, updateProfile } from '$lib/client/api';

	let username = '';

	async function submitUsername() {
		if (username.length > 32) {
			toastStore.trigger({
				message: `Usesname must be less then 32 characters`
			});

			return;
		}

		if (username.length == 0) {
			toastStore.trigger({
				message: `Username con't be empty`
			});

			return;
		}

		try {
			userProfile.set(await updateProfile(username));
		} catch (ex) {
			console.error(ex);

			if (ex instanceof ApiError && ex.kind == 'username taken') {
				toastStore.trigger({
					message: 'That username is taken'
				});
			}
		}
	}
</script>

{#if !$user}
	<button on:click={signInWithGoogle}>Sign in with google</button>
{:else if !$userProfile}
	<label class="label">
		<span>Username</span>
		<input class="input" type="text" placeholder="username" bind:value={username} />
		<button on:click={submitUsername}>Ok</button>
	</label>
{/if}
