<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	type Props = {
		href: string;
		icon: string;
		label: string;
		iconColor: string;
		backgroundColor: string;
		target?: string;
	};
	let { href, icon, label, iconColor, backgroundColor, target = '_blank' }: Props = $props();
</script>

<a {href} {target} style="background: {backgroundColor};"
	><i><Icon name={icon} width={26} color={iconColor} /></i><span>{label}</span></a
>

<style>
	a {
		padding: 15px 30px;
		border-radius: 10px;
		font-size: 1.3rem;
		text-decoration: none;
		display: inline-flex;
		gap: 10px;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		background: #ec741f;
		color: #fff;
	}

	i {
		transform: translateY(2px);
	}
</style>
