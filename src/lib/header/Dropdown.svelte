<script>
	import { fade } from 'svelte/transition';
	import { userStore, logout } from '$lib/auth/user.js';
</script>

<section in:fade={{ duration: 100 }} out:fade={{ duration: 0 }}>
	<div class="userid" style:--color={$userStore?.color}>{$userStore?.id}</div>
	<div class="name">{$userStore?.firstname} {$userStore?.lastname}</div>
	<div class="button-wrapper">
		<button on:click={() => logout()}>Logout</button>
	</div>
</section>

<style>
	section {
		position: absolute;
		top: calc(var(--gap) + var(--header-height));
		display: flex;
		flex-direction: column;
		justify-items: flex-end;
		gap: var(--gap);
		width: 160px;
		height: 90px;
		padding: 10px;
		background-color: var(--color-gray-0);
		border: 1px solid var(--color-gray-300);
		border-radius: 5px;
		box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px,
			rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;
	}

	.userid {
		font-size: 16px;
		font-weight: 600;
		color: var(--color);
	}

	.name {
		color: var(--color-gray-400);
	}

	.button-wrapper {
		display: flex;
		align-items: flex-end;
		flex-grow: 1;
	}

	button {
		height: 32px;
		width: 100%;
		background-color: var(--color-gray-0);
		border: none;
		border-radius: 2px;
		color: var(--color-gray-300);
		font-size: 16px;
		user-select: none;
		cursor: pointer;
		outline: none;
		transition: background-color ease-out 200ms 0ms;
	}

	button:hover {
		background-color: var(--color-gray-100);
	}
</style>
