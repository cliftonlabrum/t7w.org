<script lang="ts">
	import { API, onMount, page, Icon, socket } from '$lib/global'

	let list = $state([]) as any[]
	let success = $state(false)

	onMount(async () => {
		const results = await API.get('/service')

		list = results.data.list

		let successParam = page.url.searchParams.get('success')
		success = successParam === 'true'

		//@@@
		socket.on('t7w:service:refresh', (data) => {
			list = data // world
		})
	})
</script>

{#if success}
	<blockquote>
		<span><Icon name="check" width={44} color="#074567" /></span>
		<p>Your signup was successful!<br />Thank you for supporting our youth.</p>
	</blockquote>
{/if}

<h3>Signups</h3>
<ul>
	{#each list as item}
		<li>{item.name}</li>
	{/each}
</ul>

<p>
	<a href="/service">Go Back</a>
</p>

<style>
	a {
		text-decoration: none;
		color: #074567;
		font-size: 0.9rem;
	}
	ul {
		list-style: none;
		padding: 0;
		margin: 0px 0px 30px;
	}
	h3 {
		margin-top: 40px;
	}

	blockquote {
		margin: 30px 0px 0px;
		border: 0px solid rgb(7, 69, 103, 0.15);
		background: rgb(7, 69, 103, 0.1);
		border-radius: 10px;
		padding: 30px 40px;
		display: flex;
		flex-direction: column;
	}
	blockquote span {
		display: block;
	}
	blockquote p {
		color: rgb(7, 69, 103, 0.9);
		margin: 0;
	}
</style>
