import { getUser, getVisitedLocations } from '$lib/server/db';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

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

	let locations;

	try {
		locations = await getUser(locals.user!.email!);
	} catch (ex) {
		console.error(ex);
		throw error(500, 'internal error');
	}

	return json(locations);
};
