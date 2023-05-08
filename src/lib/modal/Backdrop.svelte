<div class="backdrop" on:click on:keydown>
	<slot />
</div>

<style>
	.backdrop {
		position: fixed;
		left: 0;
		top: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.9);
		z-index: 2000;
	}
</style>
