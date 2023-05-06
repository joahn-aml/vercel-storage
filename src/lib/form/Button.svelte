<script>
	export let full = false;
</script>

<button style:min-width={full === true ? '100%' : '160px'} on:click><slot /></button>

<style>
	button {
		padding: 10px 20px;
		background-color: var(--color-gray-0);
		color: var(--color-gray-400);
		border: 1px solid var(--color-gray-300);
		border-radius: 5px;
		font-size: 18px;
		letter-spacing: 2px;
		user-select: none;
		cursor: pointer;
		outline: none;
		transition: border-color ease-out 200ms 0ms, color ease-out 200ms 0ms;
	}

	button:hover {
		border-color: var(--color-gray-400);
	}
</style>
