<script lang="ts">
	import Experiences from '$lib/Experiences.svelte';
	import Hackathons from '$lib/Hackathons.svelte';
	import Links from '$lib/Links.svelte';
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags
	title="Marcus Pang | Engineer @ Monad Foundation"
	description="I enjoy building websites and applications. Most of my hours are spent on hackathons, and I'm
		always building something."
	canonical="https://marcuspang.me/"
	twitter={{
		handle: '@marcuspangeth',
		site: '@marcuspangeth',
		cardType: 'summary_large_image',
		title: 'Marcus Pang | Engineer @ Monad Foundation',
		description:
			"I enjoy building websites and applications. Most of my hours are spent on hackathons, and I'm always building something."
	}}
/>

<section class="py-8">
	<h1 class="pb-1 text-3xl font-semibold tracking-tight text-primary">Marcus Pang</h1>
	<p class="pb-1 text-xl text-muted-foreground">Full-stack + Smart Contract Developer</p>
</section>
<section class="py-8">
	<h2 class="pb-2 text-xl font-bold tracking-tight text-primary" id="about-me">About Me</h2>
	<p class="prose dark:text-slate-300/70">
		I enjoy building websites and applications. Most of my hours are spent on hackathons, and I'm
		always building something.
	</p>
</section>
<section class="py-8">
	<h2 class="pb-3 text-xl font-bold tracking-tight text-primary" id="experience">
		Work Experience
	</h2>
	<Experiences />
</section>
<section class="py-8">
	<h2 class="pb-3 text-xl font-bold tracking-tight text-primary" id="past-hackathons">
		Hackathons
	</h2>
	<Hackathons />
</section>
<section class="py-8">
	<h2 class="pb-3 text-xl font-bold tracking-tight text-primary" id="links">Links</h2>
	<Links />
</section>
