<script lang="ts">
	export let isDarkMode = true;
</script>

<svg
	width="24"
	height="24"
	viewBox="0 0 24 24"
	fill="currentColor"
	xmlns="http://www.w3.org/2000/svg"
	{...$$props}
>
	<path
		d="M5.33773 12.8386C5.33773 11.5558 6.73713 10.7635 7.8371 11.4235L9.91855 13.6717V13.6717C11.0412 14.8844 12.9587 14.8844 14.0814 13.6717V13.6717L16.1629 11.4235C17.2629 10.7635 18.6623 11.5558 18.6623 12.8386V21.5828H23.9921L23.9921 8.59142C23.9921 6.52453 24.2042 4.59448 22.4327 3.52957C22.1402 3.35373 21.7127 3.20664 21.3781 3.13959C20.0897 2.88142 18.7645 2.98432 17.5446 3.4237C16.6745 3.73711 15.9663 4.3626 15.3336 5.03717L14.1436 6.30592V6.30592C12.9826 7.54378 11.0174 7.54378 9.8564 6.30592V6.30592L8.66642 5.03717C8.03374 4.3626 7.32552 3.73711 6.45539 3.4237C5.23552 2.98432 3.9103 2.88142 2.62192 3.13959C2.2873 3.20664 1.85976 3.35373 1.56727 3.52957C-0.204177 4.59448 0.00791628 6.52453 0.00791628 8.59142L0.00791303 21.5828H5.33773V12.8386Z"
		fill="url(#linear-gradient)"
	/>
	<defs>
		<linearGradient id="linear-gradient" x1="0" y1="0" x2="100%" y2="0">
			{#if isDarkMode}
				<stop offset="0%" stop-color="rgb(199, 210, 254)">
					<animate
						attributeName="stop-color"
						values="rgb(199, 210, 254); rgb(254, 202, 202); rgb(254, 249, 195); rgb(254, 202, 202); rgb(199, 210, 254);"
						dur="5s"
						repeatCount="indefinite"
					/>
				</stop>
				<stop offset="100%" stop-color="rgb(254, 249, 195)">
					<animate
						attributeName="stop-color"
						values="rgb(254, 249, 195); rgb(254, 202, 202); rgb(199, 210, 254); rgb(254, 202, 202); rgb(254, 249, 195);"
						dur="5s"
						repeatCount="indefinite"
					/>
				</stop>
			{:else}
				<stop offset="0%" stop-color="rgb(29, 78, 216)">
					<animate
						attributeName="stop-color"
						values="rgb(29, 78, 216); rgb(30, 64, 175); rgb(17, 24, 39); rgb(30, 64, 175); rgb(29, 78, 216);"
						dur="5s"
						repeatCount="indefinite"
					/>
				</stop>
				<stop offset="100%" stop-color="rgb(17, 24, 39)">
					<animate
						attributeName="stop-color"
						values="rgb(17, 24, 39); rgb(30, 64, 175); rgb(29, 78, 216); rgb(30, 64, 175); rgb(17, 24, 39);"
						dur="5s"
						repeatCount="indefinite"
					/>
				</stop>
			{/if}
		</linearGradient>
	</defs>
</svg>
