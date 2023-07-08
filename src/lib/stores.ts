import type { User } from 'firebase/auth';
import { derived, writable } from 'svelte/store';
import type * as Db from '$lib/server/db';

export const authenticated = writable(false);
export const user = writable<User | null>(null);
export const userProfile = writable<Db.User | null>(null);
export const showSignin = writable(true);
export const firebaseReady = writable(false);

export const shouldSignBeVisible = derived(
	[firebaseReady, authenticated, showSignin],
	([firebaseReady, authenticated, showSignIn]) => {
		console.log([authenticated, showSignIn]);
		firebaseReady && (showSignIn || !authenticated);
	}
);

export const shouldCreateProfileVisible = derived(
	[authenticated, shouldSignBeVisible, userProfile],
	([authenticated, shouldSignBeVisible, userProfile]) => {
		console.log([authenticated, shouldCreateProfileVisible]);
		!shouldSignBeVisible && authenticated && userProfile;
	}
);
