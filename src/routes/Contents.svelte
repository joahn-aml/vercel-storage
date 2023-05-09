<section>
	<div class="content">
		<div>
			<h2 style:--color={'var(--color-5)'}>Users</h2>
			<p>
				<a href="https://vercel.com/storage/kv" target="_blank" rel="noopener noreferrer"
					>Vercel KV</a
				>
			</p>
			<p>Create, view and remove users.</p>
		</div>
		<div>
			<h2 style:--color={'var(--color-4)'}>Tasks</h2>
			<p>
				<a href="https://vercel.com/storage/postgres" target="_blank" rel="noopener noreferrer"
					>Vercel Postgres</a
				>
			</p>
			<p>A board to drag and drop user tasks.</p>
		</div>
		<div>
			<h2 style:--color={'var(--color-2)'}>Images</h2>
			<p>
				<a href="https://vercel.com/storage/blob" target="_blank" rel="noopener noreferrer"
					>Vercel Blob</a
				>.
			</p>
			<p>Upload, view and remove images.</p>
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		justify-content: center;
		padding-top: 100px;
		padding-bottom: 100px;
		background-color: var(--color-gray-0);
	}

	.content {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--gap);
		width: var(--content-width);
	}

	.content > div {
		padding-bottom: 60px;
	}

	h2,
	p {
		margin: 0;
	}

	h2 {
		font-weight: 600;
		padding-bottom: 10px;
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		background-image: linear-gradient(90deg, var(--color), 1%, white);
	}

	p {
		color: var(--color-gray-200);
		padding-bottom: 5px;
	}

	a {
		color: var(--color-gray-300);
		transition: color ease-out 200ms 0ms;
	}

	a:hover {
		color: var(--color-gray-400);
	}
</style>
