<script>
	import { tokenStore } from '$lib/auth/user';
	import { get } from 'svelte/store';

	const getValidToken = async () => {
		const token = get(tokenStore);
		const { valid } = await (
			await fetch('/api/ping', {
				method: 'GET',
				headers: { Authorization: `Bearer ${token}` }
			})
		).json();

		return valid;
	};

	const getAppVersion = async () => {
		const { version } = await (await fetch('/api/version')).json();

		return version;
	};

	const ping = async () => {
		const [valid, version] = await Promise.all([getValidToken(), getAppVersion()]);

		console.log(JSON.stringify({ valid, version }, null, 2));
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
