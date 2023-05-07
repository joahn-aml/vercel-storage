import { writable } from 'svelte/store';

/** @typedef { import("$lib/types/user").User } User */

/** @type {import("svelte/store").Writable<string | null>} */
export const tokenStore = writable(localStorage.getItem('token'));

tokenStore.subscribe((token) => {
	if (token === null) {
		window.localStorage.removeItem('token');
	} else {
		window.localStorage.setItem('token', token);
	}
});

/** @type {import("svelte/store").Writable<User | null>} */
export const userStore = writable(JSON.parse(String(localStorage.getItem('user'))));

userStore.subscribe((user) => {
	if (user === null) {
		window.localStorage.removeItem('user');
	} else {
		window.localStorage.setItem('user', JSON.stringify(user));
	}
});

/** @type {(params: {user: User, token: string}) => void}  */
export const login = ({ user, token }) => {
	tokenStore.set(token);
	userStore.set(user);
};

export const logout = () => {
	tokenStore.set(null);
	userStore.set(null);
};
