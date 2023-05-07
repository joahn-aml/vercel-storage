<script>
	import './styles.css';
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import Login from '$lib/login/Login.svelte';
	import { userStore } from '$lib/auth/user.js';
</script>

{#if $userStore}
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
