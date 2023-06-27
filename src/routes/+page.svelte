<script>
	import { ExternalLink, ExternalLinkIcon } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="marcuspang.me" />
</svelte:head>

<section class="py-2 mt-12">
	<h1 class="tracking-tight text-primary font-semibold text-2xl">Marcus Pang</h1>
	<p class="text-muted-foreground text-lg">Fullstack Developer</p>
	<div class="hover:text-secondary-foreground dark:text-slate-300 text-slate-600 transition-colors">
		<a
			href="https://etherscan.io/address/0x7730B4Cdc1B1E7a33A309AB7205411faD009C106"
			target="_blank"
			rel="noopener"
		>
			marcuspang.eth
			<ExternalLinkIcon class="h-4 w-4 mb-0.5 inline" />
		</a>
	</div>
</section>
<section class="pt-10">
	<h2 class="font-semibold text-lg text-primary">About Me</h2>
	<p class="text-secondary-foreground dark:text-slate-300">
		I enjoy building websites and applications. Most of my hours are spent on hackathons, centered
		around web3 mainly.
	</p>
</section>
