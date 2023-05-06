import { json } from '@sveltejs/kit';

/** @type { import("$lib/types/user").User } */
const defaultUser = { id: 'joahn', firstname: 'Joahn', lastname: 'Aml', color: 'aquamarine' };

export async function POST({ request, cookies }) {
	const { username, password } = await request.json();

	if (!username || !password) {
		return json({ user: null }, { status: 401 });
	}

	const token = username;
	cookies.set('token', token);

	return json({ user: defaultUser }, { status: 201 });
}
