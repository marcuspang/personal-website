<script lang="ts">
	import Hackathon from '$lib/Hackathon.svelte';
	import { Carousel } from '$lib/ui/Carousel';
	import { hackathons } from '../constants/hackathons';
	import Autoplay from 'embla-carousel-autoplay';
</script>

<Carousel
	component={Hackathon}
	componentProps={hackathons}
	config={{
		options: { loop: true, axis: 'x' },
		plugins: [
			Autoplay({
				delay: 5000
			})
		]
	}}
/>
