import { json } from '@sveltejs/kit';
import { valid } from '$lib/server/valid.js';
import {
	KV_REST_API_URL,
	KV_REST_API_TOKEN,
	KV_REST_API_READ_ONLY_TOKEN
} from '$env/static/private';

export async function GET({ request }) {
	if (!valid(request)) {
		return json({ valid: false }, { status: 401 });
	}

	/** @type {{ result: string[] }} */
	const { result: usernames } = await (
		await fetch(`${KV_REST_API_URL}/keys/*`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${KV_REST_API_TOKEN}`
			}
		})
	).json();

	const users = await Promise.all(
		usernames.map(async (username) => {
			const { result: userString } = await (
				await fetch(`${KV_REST_API_URL}/get/${username}`, {
					method: 'GET',
					headers: {
						Authorization: `Bearer ${KV_REST_API_READ_ONLY_TOKEN}`
					}
				})
			).json();
			const user = JSON.parse(userString);
			delete user.password;
			return user;
		})
	);

	return json({ users });
}
