<script lang="ts">
	import '$lib/styles.css';
	import { DataApp, Loader } from '$lib/global';
	let { children } = $props();
</script>

<main>
	<div>
		<Loader show={DataApp.loading} />
	</div>
	{@render children()}
</main>

<style>
	main {
		position: relative;
	}
</style>
