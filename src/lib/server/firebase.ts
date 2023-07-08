import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

let app: ReturnType<typeof initializeApp> | undefined = undefined;

if (typeof app !== 'undefined') {
	app = initializeApp({ credential: applicationDefault() });
}

export async function verifyToken(userToken: string) {
	return await getAuth(app).verifyIdToken(userToken);
}
