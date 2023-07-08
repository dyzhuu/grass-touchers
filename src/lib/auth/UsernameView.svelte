<script lang="ts">
	import { ApiError, updateProfile } from '$lib/client/api';
	import { userProfile } from '$lib/stores';
	import { toastStore } from '@skeletonlabs/skeleton';

	let username: string;

	async function submitUsername() {
		if (username.length > 32) {
			toastStore.trigger({
				message: `Usesname must be less then 32 characters`
			});
		}

		try {
			userProfile.set(await updateProfile(username));
		} catch (ex) {
			console.error(ex);

			if (ex instanceof ApiError) {
				toastStore.trigger({
					message: 'That username is taken'
				});
			}
		}
	}
</script>

<div>
	<h1>Welcome to Grass Touchers</h1>

	<label class="label">
		<span>Username</span>
		<input class="input" type="text" placeholder="username" bind:value={username} />
		<button on:click={submitUsername}>Ok</button>
	</label>
</div>
