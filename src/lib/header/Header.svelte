<script>
	import Triangle from './Triangle.svelte';
	import User from './User.svelte';
</script>

<header>
	<section>
		<Triangle />
		<a href="/" class="link active">Home</a>
		<a href="/users" class="link">Users</a>
		<a href="/calendar" class="link">Calendar</a>
		<a href="/images" class="link">Images</a>
		<a href="/list" class="link">List</a>
		<User />
	</section>
</header>

<style>
	header {
		display: flex;
		justify-content: center;
		position: fixed;
		left: 0;
		top: 0;
		height: var(--header-height);
		width: 100vw;
		border-bottom: 1px solid #aaa;
		background-color: black;
		z-index: 1000;
	}

	section {
		display: flex;
		align-items: center;
		gap: var(--gap);
		width: var(--content-width);
		height: var(--header-height);
		color: #777;
	}

	.link {
		color: #777;
		cursor: pointer;
		padding: var(--gap);
		padding: var(--gap);
		user-select: none;
		transition: color ease-out 200ms 0ms;
	}

	.active,
	.link:hover {
		color: white;
	}
</style>
