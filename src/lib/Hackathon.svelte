<script lang="ts">
	import { GithubIcon, GlobeIcon } from 'lucide-svelte';

	export let projectTitle: string;
	export let hackathonTitle: string;
	export let description: string | undefined = undefined;
	export let githubLink: string | undefined = undefined;
	export let websiteLink: string | undefined = undefined;
</script>

<div class="bg-slate-50 dark:bg-slate-900 py-6 px-8 rounded-lg shadow">
	<div class="flex justify-between">
		<div>
			<h4>
				{projectTitle}
			</h4>
			<p class="text-sm text-muted-foreground">built for {hackathonTitle}</p>
		</div>
		<div class="flex">
			{#if websiteLink !== undefined}
				<a href={githubLink} target="_blank" rel="noopener">
					<GlobeIcon
						class="text-foreground stroke-[1.5px] hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors"
						size={36}
					/>
				</a>
			{/if}
			{#if githubLink !== undefined}
				<a href={githubLink} target="_blank" rel="noopener">
					<GithubIcon
						class="text-foreground stroke-[1.5px] hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors"
						size={36}
					/>
				</a>
			{/if}
		</div>
	</div>
	{#if description !== undefined}
		<p>{description}</p>
	{/if}
</div>
