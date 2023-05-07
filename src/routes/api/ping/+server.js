import { json } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
import { JWT_KEY } from '$env/static/private';

export async function GET({ request }) {
	const token = request.headers.get('Authorization')?.split(' ')[1];
	let valid = true;

	try {
		jwt.verify(token ?? '', JWT_KEY);
	} catch {
		valid = false;
	}

	return json({ valid });
}
