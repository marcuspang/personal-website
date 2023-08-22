<script lang="ts">
	import { ExternalLinkIcon, GithubIcon, GlobeIcon } from 'lucide-svelte';
	import { links } from '../constants/links';
	import { hackathons } from '../constants/hackathons';
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
		I enjoy building websites and applications. Most of my hours are spent on hackathons and
		personal projects, centered around web3 mainly. Always building something.
	</p>
</section>
<section class="py-8">
	<h2 class="font-semibold text-lg text-primary pb-2" id="past-hackathons">Past Hackathons</h2>
	<div class="grid-cols-1 space-y-4">
		{#each hackathons as hackathon}
			<div class="bg-slate-50 py-6 px-8 rounded-lg shadow">
				<div class="flex justify-between">
					<div>
						<h4>
							{hackathon.projectTitle}
						</h4>
						<p class="text-sm text-muted-foreground">built for {hackathon.hackathonTitle}</p>
					</div>
					<div class="flex">
						{#if hackathon.websiteLink !== undefined}
							<a href={hackathon.githubLink} target="_blank" rel="noopener" class="">
								<GlobeIcon
									class="text-foreground stroke-[1.5px] hover:bg-gray-200 p-2 rounded-lg transition-colors"
									size={36}
								/>
							</a>
						{/if}
						{#if hackathon.githubLink !== undefined}
							<a href={hackathon.githubLink} target="_blank" rel="noopener" class="">
								<GithubIcon
									class="text-foreground stroke-[1.5px] hover:bg-gray-200 p-2 rounded-lg transition-colors"
									size={36}
								/>
							</a>
						{/if}
					</div>
				</div>
				{#if hackathon.description !== undefined}
					<p>{hackathon.description}</p>
				{/if}
			</div>
		{/each}
	</div>
</section>
<section class="py-8">
	<h2 class="font-semibold text-lg text-primary pb-2" id="links">Links</h2>
	<div class="grid grid-cols-3 gap-y-4">
		{#each links as link}
			<div class="col-span-1 text-muted-foreground">{link.platform}</div>
			<div class="col-span-2 text-secondary-foreground">
				{#if link.isExternal}
					<a
						href={link.href}
						target="_blank"
						rel="noopener"
						class="dark:hover:text-slate-200 dark:text-slate-300 hover:text-slate-500 text-slate-600 transition-colors"
					>
						{link.title}
						<ExternalLinkIcon class="h-4 w-4 mb-0.5 inline" />
					</a>
				{:else}
					<a
						href={link.href}
						class="dark:hover:text-slate-200 dark:text-slate-300 hover:text-slate-500 text-slate-600 transition-colors"
					>
						{link.title}
					</a>
				{/if}
			</div>
		{/each}
	</div>
</section>
