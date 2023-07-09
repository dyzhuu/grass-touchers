import { getLocations, getUser, getVisitedLocations } from '$lib/server/db';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({}) => {
	let locations;

	try {
		locations = await getLocations();
	} catch (ex) {
		console.error(ex);
		throw error(500, 'internal error');
	}

	return json(locations);
};
