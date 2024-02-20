<script lang="ts">
	import { Carousel } from '$lib/ui/Carousel';
	import Autoplay from 'embla-carousel-autoplay';
	import Experience from './Experience.svelte';
	import { experiences } from '../constants/experiences';
</script>

<Carousel
	component={Experience}
	componentProps={experiences}
	config={{
		options: { loop: true, axis: 'x' },
		plugins: [
			Autoplay({
				delay: 5000
			})
		]
	}}
/>
