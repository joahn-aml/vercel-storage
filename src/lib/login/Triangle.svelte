<script>
	export let glow = false;
</script>

<div class="wrapper">
	<div class:glow class="triangle" />
</div>

<style>
	.wrapper {
		display: flex;
		justify-content: center;
		height: 100px;
		margin-bottom: 20px;
	}

	.triangle {
		width: 0;
		height: 0;
		border-left: 50px solid transparent;
		border-right: 50px solid transparent;
		border-bottom: 100px solid var(--color-gray-100);
		transition: border-bottom-color ease-out 400ms 0ms;
	}

	.triangle.glow {
		border-bottom-color: var(--color-gray-200);
	}
</style>
