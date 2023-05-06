/** @typedef { import("$lib/types/user").User } User */

/** @type {(username: string, password: string) => Promise<User | null>}  */
export const login = async (username, password) => {
	const response = await fetch('/api/login', {
		method: 'POST',
		body: JSON.stringify({ username, password }),
		headers: {
			'Content-Type': 'application/json'
		}
	});

	const { user } = await response.json();

	return user;
};
