<script lang="ts">
	let { children } = $props();
</script>

<article>
	<section>
		<h2>Thatcher 7th Ward</h2>
		<h3>Giving Machine Youth Service Project</h3>
		<cite>🗓️ &nbsp;<b>Dec 17</b> <span>@</span> <b>6:15pm&ndash;7:15pm</b></cite>
	</section>
	{@render children()}
</article>

<style>
	article {
		max-width: 500px;
		padding: 30px 30px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 0 auto;
	}
	h2 {
		margin: 0;
	}
	cite {
		display: inline-block;
		background: rgba(255, 255, 255, 0.6);
		padding: 10px 20px;
		border-radius: 10px;
		color: rgb(7, 69, 103, 0.9);
		font-style: normal;
		line-height: 1.5;
	}
	cite span {
		color: rgb(7, 69, 103, 0.4);
	}
</style>
