import { initializeApp, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { GOOGLE_APPLICATION_CREDENTIALS } from '$env/static/private';

let app: ReturnType<typeof initializeApp> | undefined = initializeApp({
	credential: cert(GOOGLE_APPLICATION_CREDENTIALS)
});

export async function verifyToken(userToken: string) {
	return await getAuth(app).verifyIdToken(userToken);
}
