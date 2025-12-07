<script lang="ts">
	type Props = {
		href: string;
		title: string;
		subtitle?: string;
		white?: boolean;
		target?: string;
	};
	let { href, title, subtitle, white, target = '_blank' }: Props = $props();
</script>

<a {href} {target} class:white>
	<span>
		<em>{title}</em>
		{#if subtitle}
			<small>{subtitle}</small>
		{/if}
	</span>
	<i>➜</i>
</a>

<style>
	a {
		padding: 15px 30px;
		border-radius: 10px;
		font-size: 1.1rem;
		text-decoration: none;
		display: flex;
		gap: 10px;
		align-items: center;
		justify-content: center;
		font-weight: 700;

		color: #074567;
		gap: 10px;
	}
	a.white {
		background: #fff;
	}
	a:active {
		opacity: 0.8;
	}
	a em,
	a i {
		font-style: normal;
	}
	a span {
		flex: 1;
		text-align: left;
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	a small {
		color: rgb(7, 69, 103, 0.7);
		font-weight: normal;
		font-size: 0.8rem;
	}
</style>
