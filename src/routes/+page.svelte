<script lang="ts">
	import Experiences from '$lib/Experiences.svelte';
	import Hackathons from '$lib/Hackathons.svelte';
	import Links from '$lib/Links.svelte';
</script>

<svelte:head>
	<title>Marcus Pang</title>
	<meta name="description" content="marcuspang.me" />
</svelte:head>

<section class="py-8">
	<h1 class="tracking-tight text-primary font-semibold text-2xl pb-1">Marcus Pang</h1>
	<p class="text-muted-foreground text-xl pb-1">Full-stack + Smart Contract Developer</p>
</section>
<section class="py-8">
	<h2 class="font-bold text-xl text-primary pb-3 tracking-tight" id="about-me">About Me</h2>
	<p class="text-secondary-foreground dark:text-slate-300">
		I enjoy building websites and applications. Most of my hours are spent on hackathons, always
		building something.
	</p>
</section>
<section class="py-8">
	<h2 class="font-bold text-xl text-primary pb-3 tracking-tight" id="past-hackathons">
		Work Experience
	</h2>
	<Experiences />
</section>
<section class="py-8">
	<h2 class="font-bold text-xl text-primary pb-3 tracking-tight" id="past-hackathons">
		Hackathons
	</h2>
	<Hackathons />
</section>
<section class="py-8">
	<h2 class="font-bold text-xl text-primary pb-3 tracking-tight" id="links">Links</h2>
	<Links />
</section>
