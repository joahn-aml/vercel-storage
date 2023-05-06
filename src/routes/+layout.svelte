<script>
	import './styles.css';
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import Login from '$lib/login/Login.svelte';
	import { user } from '$lib/auth/user.js';
</script>

{#if $user}
	<Header />
	<main>
		<div><slot /></div>
	</main>
	<Footer />
{:else}
	<Login />
{/if}

<style>
	main {
		padding-top: var(--header-height);
	}
</style>
