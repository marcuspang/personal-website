<script lang="ts">
	import { DotIcon, GithubIcon, GlobeIcon } from 'lucide-svelte';
	import { hackathons } from '../constants/hackathons';
</script>

<div class="grid grid-cols-1 gap-4 sm:grid-cols-4 sm:gap-y-8">
	{#each hackathons as hackathon}
		<div class="col-span-1 font-normal tracking-tight text-muted-foreground">
			{hackathon.duration}
		</div>
		<div class="col-span-3 text-secondary-foreground sm:pb-0">
			<div class="space-y-2">
				<h4 class="leading-4 tracking-tight dark:text-gray-300/90 text-black/70">
					<span>{hackathon.hackathonTitle}</span>
					<DotIcon class="inline -mx-2" />
					<span>{hackathon.projectTitle}</span>
				</h4>
				{#if hackathon.description !== undefined}
					<p class="text-[15px] dark:text-gray-300/70 !mt-1 whitespace-pre-line">
						{hackathon.description}
					</p>
				{/if}
			</div>
			<div class="flex mt-2">
				{#if hackathon.websiteLink !== undefined}
					<a href={hackathon.websiteLink} target="_blank" rel="noopener">
						<GlobeIcon
							class="text-foreground stroke-[1.5px] hover:bg-gray-200/70 dark:hover:bg-gray-800/70 p-2 rounded-lg transition-colors"
							size={36}
						/>
					</a>
				{/if}
				{#if hackathon.githubLink !== undefined}
					<a href={hackathon.githubLink} target="_blank" rel="noopener">
						<GithubIcon
							class="text-foreground stroke-[1.5px] hover:bg-gray-200/70 dark:hover:bg-gray-800/70 p-2 rounded-lg transition-colors"
							size={36}
						/>
					</a>
				{/if}
			</div>
		</div>
	{/each}
</div>
