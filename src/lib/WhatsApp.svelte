<script lang="ts">
	import '$lib/styles.css';
	import ButtonSmall from '$lib/ButtonSmall.svelte';
</script>

<article>
	<h2>How to Get on WhatsApp</h2>
	<section>
		<h3>Step 1: Download the App</h3>
		<div>
			<ButtonSmall
				href="https://itunes.apple.com/app/id310633997?mt=8&pt=217218&ct=website_cta_banner_test"
				icon="apple"
				label="iPhone"
			/>
			<ButtonSmall
				href="https://play.google.com/store/apps/details?id=com.whatsapp&referrer=utm_source%3Dwebsite%26utm_campaign%3Dwebsite_cta_banner_test"
				icon="android"
				label="Android"
			/>
			<ButtonSmall href="https://www.whatsapp.com/download" icon="apple" label="Mac" />
			<ButtonSmall
				href="https://apps.microsoft.com/detail/whatsapp/9NKSQGP7F2NH?hl=en-us&gl=US&cid=www_test"
				icon="windows"
				label="Windows"
			/>
		</div>
	</section>
	<section>
		<h3>Step 2: Sign In</h3>
		<p>Create an account or sign in with your <b>phone number</b>.</p>
	</section>
	<section class="bottom">
		<h3>Step 3: Join</h3>
		<p>Use the <b>Chat on WhatsApp</b> button at the top of this page to join our group.</p>
	</section>
</article>

<style>
	h2 {
		margin-top: 20px;
	}
	section {
		display: flex;
		flex-direction: column;
		gap: 0px;
		margin-bottom: 30px;
	}

	div {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 30px;
		margin-top: 10px;
	}
	p {
		color: #074567;
		margin: 0;
		line-height: 1.5;
		font-size: 0.9rem;
	}

	.bottom {
		margin-bottom: 50px;
	}

	@media (max-width: 450px) {
		div {
			grid-template-columns: 1fr;
		}
	}
</style>
