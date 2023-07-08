import type { User } from 'firebase/auth';
import { derived, writable } from 'svelte/store';

export const authenticated = writable(false);
export const secure = writable(true);
export const user = writable<User | null>(null);
export const showSignin = writable(true);
export const firebaseReady = writable(false);

export const shouldSignBeVissible = derived(
	[authenticated, secure, showSignin],
	([authenticated, secure, showSignIn]) => {
		console.log([authenticated, secure, showSignIn]);
		firebaseReady && (showSignIn || !authenticated) !== (secure && !authenticated);
	}
);
