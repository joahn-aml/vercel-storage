<svelte:head>
	<title>Images ⋅ Vercel Storage</title>
</svelte:head>

<section>
	<div class="title">Images</div>
	<div class="description">
		<a href="https://vercel.com/storage/blob" target="_blank" rel="noopener noreferrer"
			>Vercel Blob</a
		>
		is still in a private closed beta. This page will get implemented when it is available for use.
	</div>
</section>

<style>
	section {
		margin-left: auto;
		margin-right: auto;
		padding-top: 40px;
		width: var(--content-width);
	}

	.title {
		height: 20px;
		font-weight: 700;
		letter-spacing: 1px;
		font-size: 16px;
		color: var(--color-gray-100);
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
