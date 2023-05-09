<script>
	/** @type {import("$lib/types/task").Task} */
	export let task;
</script>

<div class="task" draggable="true" on:dragstart style:--color={task.color}>
	<div class="username">{task.username}</div>
	<div class="description">{task.description}</div>
	<div class="id">{task.id}</div>
</div>

<style>
	.task {
		display: flex;
		flex-direction: column;
		gap: 5px;
		padding: 10px;
		margin-bottom: 20px;
		border: 1px solid var(--color, white);
		border-radius: 5px;
		background-color: black;
		user-select: none;
		z-index: 3000;
	}

	.id {
		font-size: 12px;
		color: var(--color-gray-100);
	}

	.username {
		color: var(--color);
	}

	.description {
		padding-top: 5px;
	}
</style>
