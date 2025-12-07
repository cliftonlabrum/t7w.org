<script lang="ts">
	type Props = {
		label: string;
		onclick?: () => void;
	};
	let { label, onclick }: Props = $props();
</script>

<button {onclick}>{label}</button>

<style>
	button {
		appearance: none;
		padding: 15px 30px;
		border-radius: 10px;
		font-size: 1rem;
		width: 100%;
		text-decoration: none;
		display: inline-flex;
		gap: 10px;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		background: #074567;
		color: #fff;
		border: none;
	}
	button:active {
		opacity: 0.8;
	}
</style>
