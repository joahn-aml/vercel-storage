import { json } from '@sveltejs/kit';
import { valid } from '$lib/server/valid.js';
import pg from 'pg';
import { POSTGRES_URL } from '$env/static/private';

export async function GET({ request }) {
	if (!valid(request)) {
		return json({ valid: false }, { status: 401 });
	}

	const client = new pg.Client({
		connectionString: POSTGRES_URL + '?sslmode=require'
	});

	await client.connect();

	const { rows: tasks } = await client.query(`
		SELECT 
			id, 
			username, 
			color, 
			description, 
			status, 
			extract(epoch from created) as created, 
			extract(epoch from updated) as updated 
		FROM 
			tasks;
	`);

	await client.end();

	return json({ tasks });
}
