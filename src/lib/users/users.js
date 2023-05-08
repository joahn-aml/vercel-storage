import { writable } from 'svelte/store';
import { tokenStore } from '$lib/auth/user';
import { get } from 'svelte/store';

const createUsersStore = () => {
	/** @type {import("svelte/store").Writable<import("$lib/types/user").User[]>} */
	const { subscribe, set } = writable([]);

	const getUsers = async () => {
		const { users } = await (
			await fetch('/api/users', {
				method: 'GET',
				headers: { Authorization: `Bearer ${get(tokenStore)}` }
			})
		).json();

		set(users);
	};

	/** @type {(params: {username: string, firstname: string, lastname: string, password: string}) => Promise<void>} */
	const upsertUser = async ({ username, firstname, lastname, password }) => {
		await fetch('/api/users', {
			method: 'POST',
			body: JSON.stringify({ username, firstname, lastname, password }),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${get(tokenStore)}`
			}
		});

		await getUsers();
	};

	/** @type {(username: string ) => Promise<void>} */
	const removeUser = async (username) => {
		await fetch('/api/users', {
			method: 'DELETE',
			body: JSON.stringify({ username }),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${get(tokenStore)}`
			}
		});

		await getUsers();
	};

	return {
		subscribe,
		getUsers,
		upsertUser,
		removeUser
	};
};

export const usersStore = createUsersStore();
