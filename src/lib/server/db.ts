import postgres from 'postgres';

const sql = postgres();

export type User = {
	id: number;
	email: string;
	username: string;
};

export type Locations = Record<string, { boundary: [{ lng: number; lat: number }][]; id: number }>;

export async function getUser(email: string) {
	return (await sql<User[]>`SELECT * FROM users WHERE email = ${email}`)[0];
}

export async function updateUsername(email: string, username: string) {
	return await sql`INSERT INTO your_table (email, username)
VALUES (${email}, ${username})
ON CONFLICT (email)
DO UPDATE SET username = EXCLUDED.username;`;
}
