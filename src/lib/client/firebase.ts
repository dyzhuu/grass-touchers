import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import * as stores from '$lib/stores';
import { toastStore } from '@skeletonlabs/skeleton';
import { PUBLIC_FIREBASE_KEY as apiKey } from '$env/static/public';
import { ApiError, getProfile } from './api';

const config = {
	apiKey,
	authDomain: 'grass-touchers.firebaseapp.com'
};

const app = initializeApp(config);
export const auth = getAuth(app);

auth.onAuthStateChanged(async (maybeUser) => {
	let signedIn = maybeUser ? true : false;
	stores.authenticated.set(signedIn);
	stores.showSignin.update((showSignedIn) => (signedIn ? false : showSignedIn));
	stores.user.set(maybeUser);

	console.log('Signed in', signedIn);

	if (signedIn) {
		try {
			stores.userProfile.set(await getProfile());
		} catch (ex) {
			if (!(ex instanceof ApiError && ex.kind == 'no profile')) {
				console.error(ex);
			}

			stores.userProfile.set(null);
		}
	}

	stores.firebaseReady.set(true);
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
