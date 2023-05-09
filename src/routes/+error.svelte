<script>
	import { page } from '$app/stores';
</script>

<section>
	<h1>{$page.status} {$page.error?.message}</h1>
	<p><a href="/">Go back to the home page</a></p>
</section>

<style>
	section {
		margin-left: auto;
		margin-right: auto;
		padding-top: 40px;
		width: var(--content-width);
	}

	h1 {
		margin: 0;
		padding-bottom: 20px;
	}

	p {
		margin: 0;
	}

	a {
		color: var(--color-gray-300);
	}

	a:hover {
		color: var(--color-gray-400);
	}
</style>
