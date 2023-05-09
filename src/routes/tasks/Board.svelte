<script>
	import Task from './Task.svelte';
	import { tasksStore } from './tasks.js';
	import { dragged, dropzone } from './dragdrop.js';
	import { get } from 'svelte/store';

	/** @typedef {import("$lib/types/task").Task} Task */
	/** @type {(a: Task, b: Task) => number} */
	const compareUpdated = (a, b) => Number(a.updated) - Number(b.updated);

	$: news = $tasksStore.filter((task) => task.status === 'new').sort(compareUpdated);
	$: progress = $tasksStore.filter((task) => task.status === 'progress').sort(compareUpdated);
	$: completed = $tasksStore.filter((task) => task.status === 'completed').sort(compareUpdated);
	$: reviewed = $tasksStore.filter((task) => task.status === 'reviewed').sort(compareUpdated);

	const drop = () => {
		const d = get(dragged);
		if (d === null) return;

		tasksStore.updateTask(d, get(dropzone));
		dragged.set(null);
	};
</script>

<section>
	<div class="header">
		<div>New</div>
		<div>Progress</div>
		<div>Completed</div>
		<div>Reviewed</div>
	</div>
	<div class="board">
		<div on:dragenter={() => dropzone.set('new')} on:dragover|preventDefault on:drop={() => drop()}>
			{#each news as task (task.id)}
				<Task {task} on:dragstart={() => dragged.set(task.id)} />
			{/each}
		</div>
		<div
			on:dragenter={() => dropzone.set('progress')}
			on:dragover|preventDefault
			on:drop={() => drop()}
		>
			{#each progress as task (task.id)}
				<Task {task} on:dragstart={() => dragged.set(task.id)} />
			{/each}
		</div>
		<div
			on:dragenter={() => dropzone.set('completed')}
			on:dragover|preventDefault
			on:drop={() => drop()}
		>
			{#each completed as task (task.id)}
				<Task {task} on:dragstart={() => dragged.set(task.id)} />
			{/each}
		</div>
		<div
			on:dragenter={() => dropzone.set('reviewed')}
			on:dragover|preventDefault
			on:drop={() => drop()}
		>
			{#each reviewed as task (task.id)}
				<Task {task} on:dragstart={() => dragged.set(task.id)} />
			{/each}
		</div>
	</div>
</section>

<style>
	.header {
		padding-bottom: 10px;
	}

	.header,
	.board {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		column-gap: 50px;
	}

	.header > div {
		color: var(--color-gray-300);
		user-select: none;
	}

	.board > div {
		padding-bottom: 400px;
	}
</style>
