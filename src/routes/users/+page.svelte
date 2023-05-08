<script>
	import Header from './Header.svelte';
	import Table from './Table.svelte';
	import { usersStore } from '$lib/users/users.js';
	import { onMount } from 'svelte';

	onMount(() => usersStore.getUsers());
</script>

<svelte:head>
	<title>Users ⋅ Vercel Storage</title>
</svelte:head>

<section>
	<Header />
	<Table />
</section>

<style>
	section {
		margin-left: auto;
		margin-right: auto;
		padding-top: 40px;
		width: var(--content-width);
	}
</style>
