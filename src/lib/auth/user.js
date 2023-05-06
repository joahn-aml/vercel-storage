import { writable } from 'svelte/store';

const createUserStore = () => {
	/** @type {import("svelte/store").Writable<null | import("$lib/types/user").User>} */
	const { subscribe, set } = writable(null);

	const login = () => {
		set({ id: 'joahn', firstname: 'Joahn', lastname: 'Aml', color: 'aquamarine' });
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
