import { json } from '@sveltejs/kit';
import { valid } from '$lib/server/valid.js';
import pg from 'pg';
import { POSTGRES_URL } from '$env/static/private';
import { randUuid, rand, randCatchPhrase } from '@ngneat/falso';

const createClient = () => new pg.Client({ connectionString: POSTGRES_URL + '?sslmode=require' });

export async function GET({ request }) {
	if (!valid(request)) {
		return json({ valid: false }, { status: 401 });
	}

	const client = createClient();
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

export async function POST({ request }) {
	if (!valid(request)) {
		return json({ valid: false }, { status: 401 });
	}

	const { username, color } = await request.json();
	const id = randUuid();
	const description = randCatchPhrase();
	const status = 'new';

	const client = createClient();
	await client.connect();

	await client.query(
		`
			INSERT INTO tasks (id, username, color, description, status, created, updated)
			VALUES ($1, $2, $3, $4, $5, now(), now());
		`,
		[id, username, color, description, status]
	);

	await client.end();
	return json({ success: true });
}

export async function PATCH({ request }) {
	if (!valid(request)) {
		return json({ valid: false }, { status: 401 });
	}

	const { id, status } = await request.json();

	const client = createClient();
	await client.connect();

	await client.query(
		`
			UPDATE 
				tasks 
			SET 
				status = $1,
				updated = now()
			WHERE 
				id = $2;
		`,
		[status, id]
	);

	await client.end();
	return json({ success: true });
}

export async function DELETE({ request }) {
	if (!valid(request)) {
		return json({ valid: false }, { status: 401 });
	}

	const { id } = await request.json();

	const client = createClient();
	await client.connect();

	await client.query('DELETE FROM tasks WHERE id = $1;', [id]);

	await client.end();
	return json({ success: true });
}
