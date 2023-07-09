import { getUser, updateUsername } from '$lib/server/db';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { PostgresError } from 'postgres';

export const GET: RequestHandler = async ({ locals }) => {
	let user;
	try {
		user = await getUser(locals.user!.email!);
	} catch (ex) {
		console.error(ex);
		throw error(500, 'internal error');
	}

	if (!user) {
		throw error(404, 'User does not have a profile');
	}

	return json(user);
};

export const POST: RequestHandler = async ({ locals, url }) => {
	let username = url.searchParams.get('username');

	if (!username) {
		throw error(400, 'username not provided');
	}

	try {
		return json(await updateUsername(locals.user!.email!, username));
	} catch (ex) {
		if (ex instanceof PostgresError) {
			if (ex.code == '23505') {
				throw error(409, 'the username is already taken');
			}
		}

		throw error(500, 'unknown error');
	}
};
