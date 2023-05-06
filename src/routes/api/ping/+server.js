import { json } from '@sveltejs/kit';

export function GET({ cookies }) {
	const token = cookies.get('token');

	console.log({ token });

	return json(token);
}
