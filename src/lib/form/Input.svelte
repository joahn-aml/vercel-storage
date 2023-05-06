<script>
	export let label = '';
	export let value = '';
	export let placeholder = '';

	/** @type {"text" | "password"} */
	export let type = 'text';
</script>

<label>
	<div>{label}</div>
	{#if type === 'text'}
		<input type="text" {placeholder} spellcheck="false" autocomplete="false" bind:value />
	{/if}
	{#if type === 'password'}
		<input type="password" {placeholder} spellcheck="false" autocomplete="false" bind:value />
	{/if}
</label>

<style>
	label > div {
		padding-top: 2px;
		padding-bottom: 6px;
		color: var(--color-gray-200);
		font-size: 12px;
		line-height: 1;
		font-weight: 600;
		user-select: none;
	}

	input {
		box-sizing: border-box;
		padding: 10px 10px;
		width: 100%;
		border: 1px solid var(--color-gray-300);
		border-radius: 5px;
		background-color: black;
		color: white;
		font-size: 18px;
		outline: none;
		transition: border-color ease-out 200ms 0ms;
	}

	input:focus {
		border-color: var(--color-gray-400);
	}

	input::placeholder {
		font-size: 16px;
		font-weight: 400;
		color: var(--color-gray-200);
	}
</style>
