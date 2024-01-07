<script lang="ts">
	import Hackathons from '$lib/Hackathons.svelte';
	import Links from '$lib/Links.svelte';
</script>

<svelte:head>
	<title>Marcus Pang</title>
	<meta name="description" content="marcuspang.me" />
</svelte:head>

<section class="py-8">
	<h1 class="tracking-tight text-primary font-semibold text-2xl pb-1">Marcus Pang</h1>
	<p class="text-muted-foreground text-lg pb-1">Full-stack + Smart Contract Developer</p>
</section>
<section class="py-8">
	<h2 class="font-semibold text-lg text-primary pb-2" id="about-me">About Me</h2>
	<p class="text-secondary-foreground dark:text-slate-300">
		I enjoy building websites and applications. Most of my hours are spent on hackathons, always
		building something.
	</p>
</section>
<section class="py-8">
	<h2 class="font-semibold text-lg text-primary pb-2" id="past-hackathons">Hackathons</h2>
	<Hackathons />
</section>
<section class="py-8">
	<h2 class="font-semibold text-lg text-primary pb-2" id="links">Links</h2>
	<Links />
</section>
