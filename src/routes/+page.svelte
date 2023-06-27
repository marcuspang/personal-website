<script lang="ts">
	import { ExternalLinkIcon } from 'lucide-svelte';

	const links: { platform: string; title: string; href: string }[] = [
		{ platform: 'Github', title: 'marcuspang', href: 'https://github.com/marcuspang' },
		{
			platform: 'ENS',
			title: 'marcuspang.eth',
			href: 'https://etherscan.io/address/0x7730B4Cdc1B1E7a33A309AB7205411faD009C106'
		},
		{
			platform: 'LinkedIn',
			title: 'marcuspangyuyang',
			href: 'https://linkedin.com/in/marcus-pang-yu-yang'
		}
	];
</script>

<svelte:head>
	<title>Marcus Pang</title>
	<meta name="description" content="marcuspang.me" />
</svelte:head>

<section class="py-2 mt-12">
	<h1 class="tracking-tight text-primary font-semibold text-2xl pb-1">Marcus Pang</h1>
	<p class="text-muted-foreground text-lg pb-1">Fullstack Developer</p>
	<a
		href="https://etherscan.io/address/0x7730B4Cdc1B1E7a33A309AB7205411faD009C106"
		target="_blank"
		rel="noopener"
		class="dark:hover:text-slate-200 dark:text-slate-300 hover:text-slate-500 text-slate-600 transition-colors"
	>
		marcuspang.eth
		<ExternalLinkIcon class="h-4 w-4 mb-0.5 inline" />
	</a>
</section>
<section class="pt-10">
	<h2 class="font-semibold text-lg text-primary pb-2">About Me</h2>
	<p class="text-secondary-foreground dark:text-slate-300">
		I enjoy building websites and applications. Most of my hours are spent on hackathons, centered
		around web3 mainly. Always building something.
	</p>
</section>
<section class="pt-10">
	<h2 class="font-semibold text-lg text-primary pb-2">Links</h2>
	<div class="grid grid-cols-3 gap-y-4">
		{#each links as link}
			<div class="col-span-1 text-muted-foreground">{link.platform}</div>
			<div class="col-span-2 text-secondary-foreground">
				<a
					href={link.href}
					target="_blank"
					rel="noopener"
					class="dark:hover:text-slate-200 dark:text-slate-300 hover:text-slate-500 text-slate-600 transition-colors"
				>
					{link.title}
					<ExternalLinkIcon class="h-4 w-4 mb-0.5 inline" />
				</a>
			</div>
		{/each}
	</div>
</section>
