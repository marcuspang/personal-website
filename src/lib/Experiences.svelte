<script lang="ts">
	import { DotIcon } from 'lucide-svelte';
	import { experiences } from '../constants/experiences';
</script>

<div class="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-y-8">
	{#each experiences as experience}
		<div class="col-span-1 font-normal tracking-tight text-muted-foreground">
			{experience.duration}
		</div>
		<div class="col-span-2 text-secondary-foreground sm:pb-0">
			<div class="space-y-2">
				<h4 class="leading-4 tracking-tight dark:text-gray-300/90 text-black/70">
					<span>{experience.company}</span>
					<DotIcon class="inline -mx-2" />
					<span>{experience.role}</span>
				</h4>
				<p class="text-[15px] dark:text-gray-300/70">{experience.description}</p>
			</div>
		</div>
	{/each}
</div>
