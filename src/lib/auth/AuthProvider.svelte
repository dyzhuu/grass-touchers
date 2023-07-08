<script lang="ts">
	import { modalStore, type ModalSettings, focusTrap } from '@skeletonlabs/skeleton';
	import { showSignin } from '../stores';
	import AuthView from './AuthView.svelte';

	let modalVisible = false;

	const settings: ModalSettings = {
		type: 'component',
		component: {
			ref: AuthView
		},

		response() {
			modalVisible = false;
		}
	};

	$: if ($showSignin && !modalVisible) {
		modalVisible = true;
		modalStore.trigger(settings);
	} else {
		console.log('Closing modal');
		modalStore.clear();
	}
</script>
