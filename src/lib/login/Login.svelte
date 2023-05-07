<script>
	import Triangle from './Triangle.svelte';
	import { Button, Input } from '$lib/form';
	import { fade } from 'svelte/transition';
	import { login } from '$lib/auth/user.js';

	let username = '';
	let password = '';
	let error = false;

	$: {
		error = false;
		[username, password]; // Dependencies
	}

	const submit = async () => {
		const response = await fetch('/api/login', {
			method: 'POST',
			body: JSON.stringify({ username, password }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const { user, token } = await response.json();

		if (user && token) {
			login({ user, token });
		} else {
			error = true;
		}
	};
</script>

<svelte:head>
	<title>Login ⋅ Vercel Storage</title>
</svelte:head>

<section in:fade={{ duration: 0 }} out:fade={{ duration: 200 }}>
	<form on:submit|preventDefault={submit}>
		<Triangle glow={username !== '' && password !== ''} {error} />
		<Input label="Username" placeholder="Enter your username" bind:value={username} autofocus />
		<Input
			label="Password"
			placeholder="Enter your password"
			bind:value={password}
			type="password"
		/>
		<div style:padding-top="10px">
			<Button full>Login</Button>
		</div>
	</form>
</section>

<style>
	section {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 100vh;
		background-color: var(--color-gray-0);
		z-index: 2000;
	}

	form {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: 10px;
		width: 300px;
		padding-bottom: 126px;
	}
</style>
