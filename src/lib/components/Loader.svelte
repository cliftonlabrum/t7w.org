<script lang="ts">
	type Props = {
		show: boolean;
		size?: number;
		modal?: boolean;
		opacity?: number;
	};
	let { show, size = 60, modal, opacity }: Props = $props();
</script>

<!-- MARK: Veil
 -->
<div class:show class:modal style:opacity={show ? (opacity ? opacity : 0.8) : 0}></div>
<!-- MARK: Spinner 
 -->
<span
	class:show
	class="loader"
	style:opacity={show ? 1 : 0}
	style:width={`${size}px`}
	style:height={`${size}px`}
></span>

<style>
	/* Veil */
	div {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 500;
		/* border-radius: var(--cornerBig); */
		/* backdrop-filter: grayscale(50%); */
		display: flex;
		transition: opacity 500ms;
		pointer-events: none;
		background: rgba(255, 255, 255, 1);
	}
	.show {
		pointer-events: all;
	}
	/* Loader */
	.loader {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: rotateZ(45deg) translate(-50%);
		perspective: 1000px;
		border-radius: 50%;
		z-index: 501;
		color: rgb(7, 69, 103, 0.5);
		pointer-events: none;
	}
	.loader:before,
	.loader:after {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: inherit;
		height: inherit;
		border-radius: 50%;
		transform: rotateX(70deg);
		animation: 1s spin linear infinite;
	}
	.loader:after {
		color: rgb(7, 69, 103, 1);
		transform: rotateY(70deg);
		animation-delay: 0.4s;
	}

	@keyframes rotate {
		0% {
			transform: translate(-50%, -50%) rotateZ(0deg);
		}
		100% {
			transform: translate(-50%, -50%) rotateZ(360deg);
		}
	}

	@keyframes rotateccw {
		0% {
			transform: translate(-50%, -50%) rotate(0deg);
		}
		100% {
			transform: translate(-50%, -50%) rotate(-360deg);
		}
	}

	@keyframes spin {
		0%,
		100% {
			box-shadow: 0.3em 0px 0 0px currentcolor;
		}
		12% {
			box-shadow: 0.3em 0.3em 0 0 currentcolor;
		}
		25% {
			box-shadow: 0 0.3em 0 0px currentcolor;
		}
		37% {
			box-shadow: -0.3em 0.3em 0 0 currentcolor;
		}
		50% {
			box-shadow: -0.3em 0 0 0 currentcolor;
		}
		62% {
			box-shadow: -0.3em -0.3em 0 0 currentcolor;
		}
		75% {
			box-shadow: 0px -0.3em 0 0 currentcolor;
		}
		87% {
			box-shadow: 0.3em -0.3em 0 0 currentcolor;
		}
	}
</style>
