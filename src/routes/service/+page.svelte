<script lang="ts">
	import { DataApp, ButtonLink, goto } from '$lib/global'
	import ButtonSubmit from '$lib/components/ButtonSubmit.svelte'
</script>

<section>
	<p>
		A few youth will come to your house for about <b>15 minutes.</b> They will do small household chores,
		like sweeping, dusting, cleaning, helping with kids, etc.
	</p>
	<p>Please have cleaning supplies and instructions ready!</p>
	<p>
		In exchange for their service, you may make a donation to the <b>Giving Machine</b>. 100% of
		donations will directly to the Giving Machine that same night.
	</p>

	<ButtonLink
		href="https://venmo.com/u/clifton"
		target="_blank"
		title="Donate via Venmo"
		subtitle="@clifton"
		white
	/>
</section>

<form on:submit|preventDefault>
	<h4>Sign Up</h4>
	<p>To have youth come to your house, please submit your name.</p>
	<input type="text" placeholder="Your full name..." bind:value={DataApp.name} />
	<ButtonSubmit
		label="Submit"
		onclick={async () => {
			await DataApp.submitService()
		}}
	/>
</form>
<footer>
	<ButtonLink href="/service/list" target="_self" title="See Who Signed Up" />
</footer>

<style>
	p {
		line-height: 1.6;
	}

	input {
		width: 100%;
		padding: 10px 15px;
		margin-top: 10px;
		margin-bottom: 20px;
		color: rgb(7, 69, 103, 1);
		border: 2px solid rgb(7, 69, 103, 0.3);
		background: #fff;
		font-size: 1rem;
		border-radius: 10px;
		box-sizing: border-box;
		font-family: 'Merriweather', serif;
	}
	input:focus {
		border: 2px solid rgb(7, 69, 103, 0.6);
		outline: none;
	}
	input::placeholder {
		color: rgba(0, 0, 0, 0.3);
	}
	h4 {
		font-size: 1.3rem;
		margin: 0 0 10px;
		color: rgb(7, 69, 103, 1);
	}
	form {
		margin: 20px 0px;
		border: 0px solid rgb(7, 69, 103, 0.15);
		background: rgb(7, 69, 103, 0.1);
		border-radius: 10px;
		padding: 20px 40px 40px;
	}
	form h4 {
		margin: 0 0 10px;
	}
	form p {
		margin: 0 0 10px;
		font-size: 0.8rem;
		line-height: 1.2;
		color: rgb(7, 69, 103, 0.7);
	}
	footer {
		margin: 20px 0 0;
	}
</style>
