import { json } from '@sveltejs/kit';

export async function GET() {
	// @ts-ignore
	return json({ version: __APP_VERSION__ });
}
