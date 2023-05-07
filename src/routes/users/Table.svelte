<script>
	import { usersStore } from './users.js';
</script>

<div class="table">
	<div class="header">
		<div class="username">Username</div>
		<div class="name">Name</div>
		<div class="description">Description</div>
		<div class="color">Color</div>
		<div class="remove" />
	</div>
	<div class="rows">
		{#each $usersStore as user}
			<div class="row" style:--color={user.color}>
				<div class="username"><button>{user.id}</button></div>
				<div class="name">{user.firstname} {user.lastname}</div>
				<div class="description">{user.description}</div>
				<div class="color"><div class="circle" /></div>
				<div class="remove"><button>✕</button></div>
			</div>
		{/each}
	</div>
</div>

<style>
	.table {
		width: var(--content-width);
	}

	.header,
	.row {
		display: flex;
		align-items: center;
		gap: var(--gap);
		height: 20px;
	}

	.header {
		margin-bottom: 16px;
		font-size: 14px;
		user-select: none;
	}

	.row {
		margin-bottom: 24px;
	}

	.header {
		color: var(--color-gray-100);
	}

	.username {
		min-width: 200px;
		color: var(--color);
	}
	.username button {
		all: unset;
		cursor: pointer;
	}

	.name {
		min-width: 300px;
	}

	.description {
		flex-grow: 1;
	}

	.row .description {
		color: var(--color-gray-200);
	}

	.color {
		display: flex;
		justify-content: flex-end;
		min-width: 100px;
	}

	.circle {
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background-color: var(--color);
	}

	.remove {
		min-width: 32px;
	}

	.remove {
		display: flex;
		justify-content: flex-end;
	}
	.remove button {
		all: unset;
		cursor: pointer;
		color: var(--color-gray-100);
		transition: color ease-out 200ms 0ms;
	}
	.remove button:hover {
		color: var(--color-gray-400);
	}
</style>
