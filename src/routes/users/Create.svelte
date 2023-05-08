<script>
	import Modal from '$lib/modal/Modal.svelte';
	import { Input } from '$lib/form';
	import { usersStore } from '$lib/users/users.js';

	export let open = false;
	export let close = () => {};

	let username = '';
	let firstname = '';
	let lastname = '';
	let password = '';

	$: creatable = [username, firstname, lastname, password].every((value) => value !== '');
	$: if (open) {
		username = '';
		firstname = '';
		lastname = '';
		password = '';
	}

	const create = async () => {
		if (!creatable) {
			return;
		}

		await usersStore.upsertUser({ username, firstname, lastname, password });

		close();
	};
</script>

<Modal {open} {close}>
	<span slot="title">Create user</span>
	<form on:submit|preventDefault={create}>
		<main>
			<Input bind:value={username} label="Username" placeholder="Enter a username" />
			<div class="row">
				<Input bind:value={firstname} label="Firstname" placeholder="User first name" />
				<Input bind:value={lastname} label="Lastname" placeholder="User last name" />
			</div>
			<Input
				bind:value={password}
				label="Password"
				placeholder="Enter a user password"
				type="password"
			/>
		</main>
		<button class="create">Create</button>
	</form>
</Modal>

<style>
	main {
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding: 10px 20px 20px 20px;
	}

	.row {
		display: flex;
		gap: 10px;
	}

	button {
		all: unset;
		box-sizing: border-box;
		width: 100%;
		padding: 20px 20px;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
		background-color: var(--color-gray-0);
		color: var(--color-gray-400);
		text-align: center;
		cursor: pointer;
		transition: background-color ease-out 200ms 0ms;
	}

	button:hover {
		background-color: var(--color-gray-100);
	}
</style>
