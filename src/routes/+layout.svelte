<script>
	import './styles.css';
	import Header from '$lib/header/Header.svelte';
</script>

<Header />
<main>
	<div><slot /></div>
</main>

<style>
	main {
		padding-top: var(--header-height);
	}
</style>
