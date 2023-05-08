import { json } from '@sveltejs/kit';
import { valid } from '$lib/server/valid.js';
import {
	KV_REST_API_URL,
	KV_REST_API_TOKEN,
	KV_REST_API_READ_ONLY_TOKEN
} from '$env/static/private';
import bcrypt from 'bcryptjs';
import { randSkill } from '@ngneat/falso';

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

export async function POST({ request }) {
	if (!valid(request)) {
		return json({ valid: false }, { status: 401 });
	}

	/** @type {{username: string, firstname: string, lastname: string, password: string }} */
	const { username, firstname, lastname, password } = await request.json();

	const hash = bcrypt.hashSync(password);

	const description = randSkill();

	const colors = ['yellow', 'magenta', 'cyan', 'aqua', 'aquamarine', 'wheat'];
	const color = colors[Math.floor(Math.random() * colors.length)];

	await (
		await fetch(`${KV_REST_API_URL}/set/${username}`, {
			method: 'POST',
			body: JSON.stringify({
				id: username.toLowerCase(),
				firstname,
				lastname,
				password: hash,
				description,
				color
			}),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${KV_REST_API_TOKEN}`
			}
		})
	).json();

	return json({ success: true });
}

export async function DELETE({ request }) {
	if (!valid(request)) {
		return json({ valid: false }, { status: 401 });
	}

	/** @type {{username: string }} */
	const { username } = await request.json();

	await (
		await fetch(`${KV_REST_API_URL}/del/${username}`, {
			method: 'POST',
			body: JSON.stringify({
				id: username.toLowerCase()
			}),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${KV_REST_API_TOKEN}`
			}
		})
	).json();

	return json({ success: true });
}
