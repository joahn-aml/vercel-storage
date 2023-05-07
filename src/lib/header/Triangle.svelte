<script>
	import { tokenStore } from '$lib/auth/user';
	import { get } from 'svelte/store';

	const ping = async () => {
		const token = get(tokenStore);
		const data = await (
			await fetch('/api/ping', {
				method: 'GET',
				headers: { Authorization: `Bearer ${token}` }
			})
		).json();
		console.log(JSON.stringify(data, null, 2));
	};
</script>

<button class="triangle" on:click={ping} />

<style>
	.triangle {
		all: unset;
		width: 0;
		height: 0;
		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
		border-bottom: 20px solid white;
		margin-right: 20px;
	}
</style>
