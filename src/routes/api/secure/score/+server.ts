import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getUser, scorePoint } from '$lib/server/db';

export const POST: RequestHandler = async ({ locals, url, request }) => {
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

	try {
		// body = Buffer.from(await (await request.blob()).arrayBuffer());
	} catch (ex) {
		throw error(400, 'no image');
	}

	let id = url.searchParams.get('id');

	if (!id) {
		throw error(400, 'not location');
	}

	await scorePoint(user.id, parseInt(id));

	return json({ score: 100 });
};
