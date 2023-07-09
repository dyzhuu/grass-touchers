import postgres from 'postgres';
import { DATABASE_URL } from '$env/static/private';

const sql = postgres(DATABASE_URL);

export type User = {
	id: number;
	email: string;
	username: string;
};

export type Scan = {
	area_id: number;
	scan_time: number;
};

export type Locations = Record<string, { boundary: { lng: number; lat: number }[]; id: number }>;

export async function getUser(email: string) {
	return (await sql<User[]>`SELECT * FROM players WHERE email = ${email}`)[0];
}

export async function updateUsername(email: string, username: string) {
	return await sql`INSERT INTO players (email, username)
VALUES (${email}, ${username})
ON CONFLICT (email)
DO UPDATE SET username = EXCLUDED.username;`;
}

export async function getLocations() {
	const result =
		await sql`SELECT * FROM locations INNER JOIN boundaries b ON locations.id = b.area_id;`;
	let data: Locations = {};

	for (const entry of result) {
		if (!data[entry.area_name as unknown as string]) {
			data[entry.area_name] = { id: entry.area_id, boundary: [] };
		}

		data[entry.area_name].boundary.push({
			lat: entry.lat,
			lng: entry.lng
		});
	}

	return data;
}

export async function getVisitedLocations(userId: number) {
	return await sql<
		Scan[]
	>`SELECT area_id, scan_time FROM touch_grass WHERE player_id = ${userId} AND scan_time > CURRENT_TIMESTAMP - INTERVAL '7 days';`;
}

export async function leaderBoard() {
	return await sql<User[]>`SELECT * FROM players ORDER BY score DESC LIMIT 50`;
}
