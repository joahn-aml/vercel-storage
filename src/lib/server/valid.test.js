import { describe, it, expect } from 'vitest';
import { valid } from './valid.js';
import jwt from 'jsonwebtoken';
import { JWT_KEY } from '$env/static/private';

describe('validate request bearer token', () => {
	const url = 'https://vercel.com/';
	const valid_token = jwt.sign('vitest', JWT_KEY);
	const invalid_token = jwt.sign('vitest', `vitest_${JWT_KEY}`);

	it('missing authorization header', () => {
		const request = new Request(url);

		expect(valid(request)).toBe(false);
	});

	it('empty authorization header', () => {
		const headers = new Headers();
		headers.append('Authorization', '');

		const request = new Request(url, { headers });

		expect(valid(request)).toBe(false);
	});

	it('only bearer in authorization header', () => {
		const headers = new Headers();
		headers.append('Authorization', 'Bearer ');

		const request = new Request(url, { headers });

		expect(valid(request)).toBe(false);
	});

	it('malformed bearer', () => {
		const headers = new Headers();
		headers.append('Authorization', `Björn ${valid_token}`);

		const request = new Request(url, { headers });

		expect(valid(request)).toBe(false);
	});

	it('invalid token', () => {
		const headers = new Headers();
		headers.append('Authorization', `Bearer ${invalid_token}`);

		const request = new Request(url, { headers });

		expect(valid(request)).toBe(false);
	});

	it('valid token', () => {
		const headers = new Headers();
		headers.append('Authorization', `Bearer ${valid_token}`);

		const request = new Request(url, { headers });

		expect(valid(request)).toBe(true);
	});

	it('valid token with fluff', () => {
		const headers = new Headers();
		headers.append('Authorization', `Bearer ${valid_token} some extra redudant stuff`);

		const request = new Request(url, { headers });

		expect(valid(request)).toBe(true);
	});
});
