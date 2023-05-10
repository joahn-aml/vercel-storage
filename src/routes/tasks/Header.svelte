<script>
	import { tasksStore } from './tasks.js';
	import { draggedStore, dropzoneStore } from './dragdrop.js';
	import { get } from 'svelte/store';

	const onDeleteDrop = async () => {
		const dragged = get(draggedStore);
		if (!dragged) return;

		await tasksStore.deleteTask(dragged);

		draggedStore.set(null);
		dropzoneStore.set(null);
	};
</script>

<header>
	<h1><button on:click={() => tasksStore.getTasks()}>Tasks</button></h1>
	<div class="actions">
		<button class="remove" on:dragover|preventDefault on:drop={onDeleteDrop}>-</button>
		<button class="create" on:click={() => tasksStore.createTask()}>+</button>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: flex-start;
		margin-bottom: 20px;
		height: 20px;
	}

	h1 {
		flex-grow: 1;
		margin: 0;
		font-size: 16px;
		color: var(--color-gray-100);
		user-select: none;
	}

	button {
		all: unset;
	}

	.actions {
		display: flex;
		gap: 20px;
	}

	.actions button {
		font-size: 20px;
		font-weight: 700;
		color: var(--color-gray-300);
		padding: 0px 10px;
		background-color: var(--color-gray-0);
		user-select: none;
	}

	.create {
		cursor: pointer;
	}
</style>
