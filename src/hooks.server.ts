import { verifyToken } from '$lib/server/firebase';
import type { Handle } from '@sveltejs/kit';

function unauthenticated(message?: String) {
	return new Response(
		JSON.stringify({
			error: 'Not authenticated',
			message
		}),
		{
			status: 401
		}
	);
}

export const handle = (async ({ event, resolve }) => {
	if (event.url.href.includes('/api/secure')) {
		try {
			const token = event.request.headers.get('AUTHENTICATION');
			if (!token) {
				return unauthenticated();
			}

			event.locals.user = await verifyToken(token);
		} catch (ex) {
			console.error(ex);
			return unauthenticated();
		}
	}

	const response = await resolve(event);
	return response;
}) satisfies Handle;
