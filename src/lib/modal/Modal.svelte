<script>
	import { fade } from 'svelte/transition';
	import Backdrop from './Backdrop.svelte';

	export let open = false;
	export let close = () => {};

	/** @type {(event: KeyboardEvent) => void} */
	const handleKeyDown = (event) => {
		if (event.key === 'Escape') {
			close();
		}
	};
</script>

<svelte:window on:keydown={handleKeyDown} />

{#if open}
	<section in:fade={{ duration: 200 }} out:fade={{ duration: 0 }}>
		<Backdrop on:click={close} />
		<div class="modal">
			<header>
				<div class="title"><slot name="title" /></div>
				<button class="close" on:click={close}>✕</button>
			</header>
			<slot />
		</div>
	</section>
{/if}

<style>
	section {
		position: fixed;
		left: 0;
		top: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 100vh;
		z-index: 1500;
	}

	.modal {
		display: flex;
		flex-direction: column;
		width: 400px;
		background-color: var(--color-gray-0);
		border: 1px solid var(--color-gray-300);
		border-radius: 10px;
		z-index: 2100;
	}

	header {
		display: flex;
		padding: 20px;
	}

	.title {
		flex-grow: 1;
		color: var(--color-gray-200);
		user-select: none;
	}

	.close {
		all: unset;
		cursor: pointer;
		color: var(--color-gray-200);
		transition: color ease-out 200ms 0ms;
	}
	.close:hover {
		color: var(--color-gray-400);
	}
</style>
