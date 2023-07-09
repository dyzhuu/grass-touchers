import type { User } from 'firebase/auth';
import { derived, writable } from 'svelte/store';
import type * as Db from '$lib/server/db';

export const firebaseReady = writable(false);
export const authenticated = writable(false);
export const user = writable<User | null>(null);
export const userProfile = writable<Db.User | null>(null);
export const showSignin = writable(true);
