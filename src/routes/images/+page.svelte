<svelte:head>
	<title>Images ⋅ Vercel Storage</title>
</svelte:head>

<section>
	<div class="todo">Todo</div>
	<div class="description">
		<a href="https://vercel.com/storage/blob" target="_blank" rel="noopener noreferrer"
			>Vercel Blob</a
		>
		is still in a private closed beta. This page will get implemented when
		<a href="https://vercel.com/storage/blob" target="_blank" rel="noopener noreferrer"
			>Vercel Blob</a
		> is available.
	</div>
</section>

<style>
	section {
		margin-left: auto;
		margin-right: auto;
		padding-top: 40px;
		width: var(--content-width);
	}

	.todo {
		font-weight: 700;
		letter-spacing: 1px;
		font-size: 16px;
		color: var(--color-2);
		margin-bottom: 20px;
	}

	.description {
		color: var(--color-gray-200);
	}

	a {
		color: var(--color-gray-300);
	}

	a:hover {
		color: var(--color-gray-400);
	}
</style>
