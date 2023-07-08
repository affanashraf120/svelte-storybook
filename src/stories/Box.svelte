<script lang="ts">
	export let imageUrl: string;
	export let title: string;
	export let type: 'square' | 'rectangular' = 'rectangular';
</script>

<h3>{title}</h3>
<br />
<div class:square={type === 'square'} class:rectangular={type === 'rectangular'}>
	<img src={imageUrl} alt={title} />
</div>

<style>
	.square {
		width: 200px;
		height: 200px;
		border: 1px solid #000;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.rectangular {
		width: 300px;
		height: 150px;
		border: 1px solid #000;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	img {
		width: 100%;
		height: 100%;
	}
</style>
