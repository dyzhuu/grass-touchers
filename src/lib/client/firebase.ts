import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import * as stores from '$lib/stores';
import { toastStore } from '@skeletonlabs/skeleton';
import { get } from 'svelte/store';

const config = {
	apiKey: 'AIzaSyDu8yxldHRJeioacwyOlv7Dhd2Mz1U3q0A',
	authDomain: 'grass-touchers.firebaseapp.com'
};

const app = initializeApp(config);
export const auth = getAuth(app);

auth.onAuthStateChanged((maybeUser) => {
	let signedIn = maybeUser ? true : false;
	stores.authenticated.set(signedIn);
	stores.showSignin.update((showSignedIn) => (signedIn ? false : showSignedIn));
	stores.user.set(maybeUser);
	console.log(maybeUser);
});

const googleProvider = new GoogleAuthProvider();
googleProvider.addScope('openid');

export async function signInWithGoogle() {
	try {
		await signInWithPopup(auth, googleProvider);
	} catch (ex) {
		console.error(ex);

		if (ex instanceof Error) {
			toastStore.trigger({
				message: `Could not sign in ${ex.message}`
			});
		} else {
			toastStore.trigger({
				message: `Unknown error signing in`
			});
		}
	}
}
