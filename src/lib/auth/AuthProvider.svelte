<script lang="ts">
	import { modalStore, type ModalSettings, focusTrap } from '@skeletonlabs/skeleton';
	import { shouldCreateProfileVisible, showSignin, userProfile } from '../stores';
	import AuthView from './AuthView.svelte';
	import UsernameView from './UsernameView.svelte';

	let signInModalVisible = false;
	let usernameModalVisible = false;

	const settings: Record<string, ModalSettings> = {
		signIn: {
			type: 'component',
			component: {
				ref: AuthView
			},

			response() {
				signInModalVisible = false;
			}
		},
		createAccount: {
			type: 'component',
			component: {
				ref: UsernameView
			},

			response() {
				usernameModalVisible = false;
			}
		}
	};

	$: console.log('user profile', $userProfile);
	$: console.log('show create profile', $shouldCreateProfileVisible);

	$: if ($showSignin && !signInModalVisible) {
		signInModalVisible = true;
		modalStore.trigger(settings.signIn);
	} else if ($shouldCreateProfileVisible && !usernameModalVisible) {
		usernameModalVisible = true;
		modalStore.trigger(settings.createAccount);
	} else {
		console.log('Closing modal');
		modalStore.clear();
	}
</script>
