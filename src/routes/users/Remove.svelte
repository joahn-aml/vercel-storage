<script>
	import Modal from '$lib/modal/Modal.svelte';
	import { usersStore } from '$lib/users/users.js';

	/** @type {string | null } */
	export let username = null;
	export let close = () => {};

	const remove = async () => {
		if (!username) {
			return;
		}

		await usersStore.removeUser(username);

		close();
	};
</script>

<Modal open={username !== null} {close}>
	<span slot="title">Remove user {username}</span>
	<form on:submit|preventDefault={remove}>
		<main>
			This will remove the user <i>{username}</i>. This action can not be undone.
		</main>
		<button class="create">Remove</button>
	</form>
</Modal>

<style>
	main {
		padding: 10px 20px 20px 20px;
	}

	button {
		all: unset;
		box-sizing: border-box;
		width: 100%;
		padding: 20px 20px;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
		background-color: var(--color-gray-0);
		color: tomato;
		text-align: center;
		cursor: pointer;
		transition: background-color ease-out 200ms 0ms;
	}

	button:hover {
		background-color: var(--color-gray-100);
	}
</style>
