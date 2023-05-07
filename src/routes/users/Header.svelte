<script>
	import { usersStore } from './users.js';
</script>

<header>
	<h1><button on:click={() => usersStore.getUsers()}>Users</button></h1>
	<button class="add">+</button>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 40px;
		height: 20px;
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

	.add {
		all: unset;
		height: 20px;
		font-size: 24px;
		font-weight: 300;
		line-height: 0;
		color: var(--color-gray-100);
		cursor: pointer;
		transition: color ease-out 200ms 0ms;
	}
	.add:hover {
		color: var(--color-gray-400);
	}
</style>
