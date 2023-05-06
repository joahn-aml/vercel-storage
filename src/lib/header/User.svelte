<script>
	import { user } from '$lib/auth/user.js';

	$: color = $user ? $user.color : 'transparent';
</script>

<section>
	<button style:--color={color} class="user" on:click={() => user.logout()} />
</section>

<style>
	section {
		flex-grow: 1;
		display: flex;
		justify-content: flex-end;
	}

	.user {
		all: unset;
		border: 3px solid var(--color);
		width: 18px;
		height: 18px;
		border-radius: 50%;
		cursor: pointer;
		transition: transform ease-out 200ms 0ms;
	}

	.user:hover {
		transform: scale(1.1125);
	}
</style>
