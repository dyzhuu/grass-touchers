import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import {} from '@sveltejs/kit';

const app = initializeApp({ credential: applicationDefault() });

export async function verifyToken(userToken: string) {
	return await getAuth(app).verifyIdToken(userToken);
}
