<script lang="ts">
	import Hackathon from '$lib/Hackathon.svelte';
	import { Carousel } from '$lib/ui/Carousel';
	import { hackathons } from '../constants/hackathons';
</script>

<Carousel component={Hackathon} componentProps={hackathons} />
