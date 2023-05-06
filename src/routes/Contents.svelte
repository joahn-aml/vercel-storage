<section>
	<div class="content">
		<div>
			<h2 style:--color={'var(--color-5)'}>Users</h2>
			<p>
				Create, view, change and remove users. Uses <a
					href="https://vercel.com/storage/kv"
					target="_blank"
					rel="noopener noreferrer">Vercel KV</a
				>.
			</p>
		</div>
		<div>
			<h2 style:--color={'var(--color-4)'}>Calendar</h2>
			<p>
				A calendar to drag and drop events. Uses <a
					href="https://vercel.com/storage/kv"
					target="_blank"
					rel="noopener noreferrer">Vercel Postgres</a
				>.
			</p>
		</div>
		<div>
			<h2 style:--color={'var(--color-2)'}>Images</h2>
			<p>
				Upload, view and remove images. Uses <a
					href="https://vercel.com/storage/blob"
					target="_blank"
					rel="noopener noreferrer">Vercel Blob</a
				>.
			</p>
		</div>
		<div>
			<h2 style:--color={'var(--color-6)'}>List</h2>
			<p>A custom made virtual list with randomly generated data.</p>
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
		grid-template-columns: repeat(2, 1fr);
		gap: var(--gap);
		width: var(--content-width);
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
		padding-bottom: 60px;
	}

	a {
		color: var(--color-gray-300);
	}

	a:hover {
		color: var(--color-gray-400);
	}
</style>
