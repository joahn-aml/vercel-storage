<script>
	import Contents from './Contents.svelte';
</script>

<svelte:head>
	<title>Home ⋅ Vercel Storage</title>
</svelte:head>

<section>
	<header>
		<div class="title">
			<h1>Vercel</h1>
			<h1 class="gradient">Storage</h1>
		</div>
		<div class="glow" />
	</header>

	<p>
		A <a href="https://vercel.com/blog/vercel-storage" target="_blank" rel="noopener noreferrer"
			>Vercel Storage</a
		>
		and
		<a href="https://www.patterns.dev/posts/virtual-lists" target="_blank" rel="noopener noreferrer"
			>virtual list</a
		> demo application.
	</p>
</section>

<Contents />

<style>
	section {
		margin-left: auto;
		margin-right: auto;
		width: var(--content-width);
	}

	header {
		display: flex;
		justify-content: space-between;
		padding-top: 100px;
		user-select: none;
	}

	.title > h1 {
		font-size: 120px;
		font-weight: 600;
		margin: 0;
	}

	.gradient {
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		background-image: linear-gradient(90deg, yellow, cyan);
	}

	.glow {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		max-height: 500px;
		background: radial-gradient(circle, rgba(0, 255, 255, 0.1) 0, rgba(255, 255, 0, 0) 65%);
		transform: scale(2) translateZ(0);
		z-index: -100;
	}

	p {
		margin-top: 100px;
		margin-bottom: 120px;
		color: var(--color-gray-200);
		height: 20px;
	}

	a {
		color: var(--color-gray-300);
	}

	a:hover {
		color: var(--color-gray-400);
	}
</style>
