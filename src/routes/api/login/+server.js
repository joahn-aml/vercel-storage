import { json } from '@sveltejs/kit';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { KV_REST_API_URL, KV_REST_API_READ_ONLY_TOKEN, JWT_KEY } from '$env/static/private';

/** @typedef { import("$lib/types/user").User } User */

export async function POST({ request }) {
	const { username, password } = await request.json();

	// No form inputs
	if (!username || !password) {
		return json({ user: null }, { status: 401 });
	}

	const response = await fetch(`${KV_REST_API_URL}/get/${username}`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${KV_REST_API_READ_ONLY_TOKEN}`
		}
	});
	const { result } = await response.json();

	// No user
	if (result === null) {
		return json({ user: null }, { status: 401 });
	}

	const user = JSON.parse(result);
	const valid = await bcrypt.compare(password, user.password);

	// Invalid password
	if (!valid) {
		return json({ user: null }, { status: 401 });
	}

	delete user.password;

	const token = jwt.sign({ user }, JWT_KEY);

	return json({ user, token }, { status: 201 });
}
