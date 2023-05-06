<script>
	const ping = async () => {
		const token = await (await fetch('/api/ping')).json();
		console.log(JSON.stringify({ token }, null, 2));
	};
</script>

<button class="triangle" on:click={ping} />

<style>
	.triangle {
		all: unset;
		width: 0;
		height: 0;
		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
		border-bottom: 20px solid white;
		margin-right: 20px;
	}
</style>
