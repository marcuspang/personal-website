<script lang="ts">
	import { GithubIcon, GlobeIcon } from 'lucide-svelte';
	import Container from './Container.svelte';

	export let projectTitle: string;
	export let hackathonTitle: string;
	export let description: string | undefined = undefined;
	export let githubLink: string | undefined = undefined;
	export let websiteLink: string | undefined = undefined;
</script>

<Container class="h-full">
	<div class="flex justify-between items-stretch">
		<div>
			<h4 class="text-lg">
				{projectTitle}
			</h4>
			<p class="text-muted-foreground">{hackathonTitle}</p>
		</div>
		<div class="flex">
			{#if websiteLink !== undefined}
				<a href={githubLink} target="_blank" rel="noopener">
					<GlobeIcon
						class="text-foreground stroke-[1.5px] hover:bg-gray-200/70 dark:hover:bg-gray-800/70 p-2 rounded-lg transition-colors"
						size={36}
					/>
				</a>
			{/if}
			{#if githubLink !== undefined}
				<a href={githubLink} target="_blank" rel="noopener">
					<GithubIcon
						class="text-foreground stroke-[1.5px] hover:bg-gray-200/70 dark:hover:bg-gray-800/70 p-2 rounded-lg transition-colors"
						size={36}
					/>
				</a>
			{/if}
		</div>
	</div>
	{#if description !== undefined}
		<p class="pt-3">{description}</p>
	{/if}
</Container>
