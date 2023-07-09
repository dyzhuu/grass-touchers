import { getTopUsers } from '$lib/server/db';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const user = getTopUsers();

	if (!user) {
		throw error(404, new Error('User does not have a profile'));
	}

	return json(user);
};
