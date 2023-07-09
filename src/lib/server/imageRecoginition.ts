import { GOOGLE_APPLICATION_CREDENTIALS } from '$env/static/private';
import { ImageAnnotatorClient } from '@google-cloud/vision';

export async function quickstart(buf: Buffer) {
	// Creates a client
	const client = new ImageAnnotatorClient({
		keyFilename: GOOGLE_APPLICATION_CREDENTIALS
	});

	// Performs label detection on the image file
	const [result] = await client.labelDetection(buf);
	const labels = result.labelAnnotations;
	console.log('Labels:');
	labels.forEach((label) => console.log(label.description));
}
