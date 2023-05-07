import { writable } from 'svelte/store';
import { tokenStore } from '$lib/auth/user';
import { get } from 'svelte/store';

const createUsersStore = () => {
	const { subscribe, set } = writable([]);

	const getUsers = async () => {
		const { users } = await (
			await fetch('/api/users', {
				method: 'GET',
				headers: { Authorization: `Bearer ${get(tokenStore)}` }
			})
		).json();

		console.log(JSON.stringify(users, null, 2));

		set(users);
	};

	return {
		subscribe,
		getUsers
	};
};

export const usersStore = createUsersStore();
