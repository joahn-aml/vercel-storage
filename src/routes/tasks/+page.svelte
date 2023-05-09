<script>
	import Header from './Header.svelte';
	import Board from './Board.svelte';
	import { onMount } from 'svelte';
	import { tasksStore } from './tasks.js';

	onMount(() => {
		tasksStore.getTasks();
	});
</script>

<svelte:head>
	<title>Tasks ⋅ Vercel Storage</title>
</svelte:head>

<section>
	<Header />
	<Board />
</section>

<style>
	section {
		margin-left: auto;
		margin-right: auto;
		padding-top: 40px;
		width: var(--content-width);
	}
</style>
