<script lang="ts">
	import '$lib/styles.css'
	import { DataApp, Loader, onMount } from '$lib/global'
	let { children } = $props()

	onMount(() => {
		DataApp.start()
	})
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
