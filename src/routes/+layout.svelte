<script>
	import './styles.css';
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
</script>

<Header />
<main>
	<div><slot /></div>
</main>
<Footer />

<style>
	main {
		padding-top: var(--header-height);
	}
</style>
