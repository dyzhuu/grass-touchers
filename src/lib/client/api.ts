import { user } from '$lib/stores';
import { get } from 'svelte/store';
import type * as Db from '$lib/server/db';

const errorType = ['not authenticated', 'username taken'] as const;
type ErrorType = (typeof errorType)[number];

export class ApiError extends Error {
	constructor(public kind: ErrorType) {
		super(kind, {});
	}
}

const secureFetch: typeof fetch = async (url, params) =>
	fetch(url, {
		headers: { AUTHENTICATION: await get(user)?.getIdToken()!, ...params?.headers },
		...params
	});

export async function getProfile(username: string): Promise<Db.User> {
	let response = await secureFetch(`/api/secure/profile?username=${encodeURIComponent(username)}`);

	if (response.status == 401) {
		throw new ApiError('not authenticated');
	} else if (response.status !== 200) {
		throw new Error('Unknown Error');
	}

	return await response.json();
}

export async function updateProfile(username: string): Promise<Db.User> {
	let response = await secureFetch(`/api/secure/profile?username=${encodeURIComponent(username)}`, {
		method: 'POST'
	});

	if (response.status == 401) {
		throw new ApiError('not authenticated');
	} else if (response.status == 409) {
		throw new ApiError('username taken');
	} else if (response.status !== 200) {
		throw new Error('Unknown Error');
	}

	return await response.json();
}
