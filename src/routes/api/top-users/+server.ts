import { getUser } from '$lib/server/db';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const user = [
		{ id: 1, email: 'user1@example.com', username: 'user1', score: 10 },
		{ id: 2, email: 'user2@example.com', username: 'user2', score: 20 },
		{ id: 3, email: 'user3@example.com', username: 'user3', score: 30 },
		{ id: 4, email: 'user4@example.com', username: 'user4', score: 40 },
		{ id: 5, email: 'user5@example.com', username: 'user5', score: 50 },
		{ id: 6, email: 'user6@example.com', username: 'user6', score: 60 },
		{ id: 7, email: 'user7@example.com', username: 'user7', score: 70 },
		{ id: 8, email: 'user8@example.com', username: 'user8', score: 80 },
		{ id: 9, email: 'user9@example.com', username: 'user9', score: 90 },
		{ id: 10, email: 'user10@example.com', username: 'user10', score: 100 },
		{ id: 11, email: 'user11@example.com', username: 'user11', score: 110 },
		{ id: 12, email: 'user12@example.com', username: 'user12', score: 120 },
		{ id: 13, email: 'user13@example.com', username: 'user13', score: 130 },
		{ id: 14, email: 'user14@example.com', username: 'user14', score: 140 },
		{ id: 15, email: 'user15@example.com', username: 'user15', score: 150 },
		{ id: 16, email: 'user16@example.com', username: 'user16', score: 160 },
		{ id: 17, email: 'user17@example.com', username: 'user17', score: 170 },
		{ id: 18, email: 'user18@example.com', username: 'user18', score: 180 },
		{ id: 19, email: 'user19@example.com', username: 'user19', score: 190 },
		{ id: 20, email: 'user20@example.com', username: 'user20', score: 200 }
	];

	if (!user) {
		throw error(404, new Error('User does not have a profile'));
	}

	return json(user);
};
