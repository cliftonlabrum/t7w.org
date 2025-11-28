<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	type Props = {
		href: string;
		icon: string;
		label: string;
		blank?: boolean;
	};
	let { href, icon, label, blank }: Props = $props();
</script>

<a {href} target="_blank" class="button"
	><i><Icon name={icon} width={20} color="#074567" /></i><span>{label}</span></a
>

<style>
	a {
		padding: 15px 30px;
		border-radius: 10px;
		font-size: 1.1rem;
		text-decoration: none;
		display: inline-flex;
		gap: 10px;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		background: #fff;
		color: #074567;
	}
	i {
		transform: translateY(2px);
	}
</style>
