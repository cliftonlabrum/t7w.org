<script lang="ts">
	import '$lib/styles.css';
	import ButtonBig from '$lib/ButtonBig.svelte';
	import WhatsApp from '$lib/WhatsApp.svelte';
	import Logo from '$lib/Logo.svelte';
</script>

<main>
	<Logo />

	<section>
		<div>
			<h2>The Church of Jesus Christ of Latter-day Saints</h2>
			<h3>Thatcher 7th Ward</h3>
		</div>
		<ButtonBig
			href="http://local.churchofjesuschrist.org/en/units/us/az/thatcher-7th-ward"
			icon="calendar"
			label="Worship & Activities"
			iconColor="#53FF8D"
			backgroundColor="#074567"
		/>
		<ButtonBig
			href="https://chat.whatsapp.com/B84d01wb93LImQ3t0iuds9"
			icon="whatsapp"
			label="Chat on WhatsApp"
			iconColor="#53FF8D"
			backgroundColor="#074567"
		/>
	</section>

	<WhatsApp />
</main>

<style>
	main {
		max-width: 500px;
		padding: 0px 30px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 0 auto;
	}

	section {
		display: flex;
		flex-direction: column;
		gap: 30px;
		margin-bottom: 50px;
	}
</style>
