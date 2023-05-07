<script>
	import { usersStore } from './users.js';
</script>

<header>
	<h1><button on:click={() => usersStore.getUsers()}>Users</button></h1>
</header>

<style>
	header {
		margin-bottom: 40px;
	}

	h1 {
		margin: 0;
		font-size: 16px;
		color: var(--color-gray-100);
		user-select: none;
	}

	h1 > button {
		all: unset;
	}
</style>
