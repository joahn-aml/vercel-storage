import { json } from '@sveltejs/kit';
import { valid } from '$lib/server/valid.js';

export async function GET({ request }) {
	return json({ valid: valid(request) });
}
