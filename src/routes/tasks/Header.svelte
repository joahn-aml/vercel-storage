<script>
	import { tokenStore } from '$lib/auth/user';
	import { get } from 'svelte/store';

	const getTasks = async () => {
		const { tasks } = await (
			await fetch('/api/tasks', { headers: { Authorization: `Bearer ${get(tokenStore)}` } })
		).json();
		console.log(JSON.stringify(tasks, null, 2));
	};
</script>

<header>
	<h1><button on:click={getTasks}>Tasks</button></h1>
</header>

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
</style>
