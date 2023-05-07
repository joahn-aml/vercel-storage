<script>
	import { usersStore } from './users.js';
</script>

<div class="table">
	<div class="header">
		<div class="username">username</div>
		<div class="name">name</div>
		<div class="description">description</div>
		<div class="color">color</div>
	</div>
	<div class="rows">
		{#each $usersStore as user}
			<div class="row" style:--color={user.color}>
				<div class="username">{user.id}</div>
				<div class="name">{user.firstname} {user.lastname}</div>
				<div class="description">{user.description}</div>
				<div class="color"><div class="circle" /></div>
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
		gap: var(--gap);
	}

	.header {
		margin-bottom: 24px;
	}

	.row {
		margin-bottom: 32px;
	}

	.header {
		color: var(--color-gray-100);
	}

	.username {
		min-width: 200px;
		color: var(--color);
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
</style>
