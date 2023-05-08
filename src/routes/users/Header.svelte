<script>
	import Create from './Create.svelte';
	import { usersStore } from '$lib/users/users.js';

	let open = false;
</script>

<header>
	<h1><button on:click={() => usersStore.getUsers()}>Users</button></h1>
	<button class="add" on:click={() => (open = true)}>+</button>
</header>
<Create {open} close={() => (open = false)} />

<style>
	header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 20px;
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
		color: var(--color-gray-200);
		cursor: pointer;
		transition: color ease-out 200ms 0ms;
	}
	.add:hover {
		color: var(--color-gray-400);
	}
</style>
