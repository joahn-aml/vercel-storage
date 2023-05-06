import { writable } from 'svelte/store';

/** @typedef { import("$lib/types/user").User } User */

const createUserStore = () => {
	/** @type {import("svelte/store").Writable<null | User>} */
	const { subscribe, set } = writable(null);

	/** @type {(user: User) => void}  */
	const login = (user) => {
		set(user);
	};

	const logout = () => {
		set(null);
	};

	return {
		subscribe,
		login,
		logout
	};
};

export const user = createUserStore();
