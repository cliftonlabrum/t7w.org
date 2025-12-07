<script lang="ts">
	import { API, onMount } from '$lib/global';

	let list = $state([]);

	onMount(async () => {
		const results = await API.get('/service');
		console.log(results.data);
		list = results.data.list;
		console.log(list);
		// Any setup code can go here
	});
</script>

{#each list as item}
	<p>{item.name}</p>
{/each}

<style>
</style>
