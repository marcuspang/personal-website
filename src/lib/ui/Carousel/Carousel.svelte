<script lang="ts">
	import { Button } from '$lib/ui/Button';
	import type { EmblaCarouselConfig } from '$lib/ui/Carousel/types';
	import { cn } from '$lib/utils';
	import type { EmblaCarouselType } from 'embla-carousel';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import { ArrowLeft, ArrowRight } from 'lucide-svelte';

	export let items: unknown[] = [];
	export let config: EmblaCarouselConfig = { options: { loop: false, axis: 'x' }, plugins: [] };

	let api: EmblaCarouselType | undefined;
	let canScrollNext = items.length > 0;
	let canScrollPrev = false;
	let scrollNext = () => {};
	let scrollPrev = () => {};

	const onInit = (event: CustomEvent<EmblaCarouselType>) => {
		api = event.detail;

		api.on('reInit', onSelect);
		api.on('select', onSelect);
	};

	const onKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'ArrowLeft') {
			event.preventDefault();
			api?.scrollPrev();
		} else if (event.key === 'ArrowRight') {
			event.preventDefault();
			api?.scrollNext();
		}
	};

	const onSelect = (api?: EmblaCarouselType) => {
		if (!api) {
			return;
		}
		canScrollPrev = api.canScrollPrev();
		canScrollNext = api.canScrollNext();
	};

	const onNext = () => {
		scrollNext();
		onSelect();
	};

	const onPrev = () => {
		scrollPrev();
		onSelect();
	};

	$: {
		if (api) {
			canScrollNext = api.canScrollNext();
			canScrollPrev = api.canScrollPrev();
			scrollNext = api.scrollNext;
			scrollPrev = api.scrollPrev;
		}
	}
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<div
	class="relative"
	on:keydown|preventDefault={onKeyDown}
	role="region"
	aria-roledescription="carousel"
>
	<div class={'overflow-hidden'} use:emblaCarouselSvelte={config} on:emblaInit={onInit}>
		<div class={cn('flex', config?.options.axis === 'x' ? '-ml-4' : '-mt-4 flex-col')}>
			{#each items as item}
				<div
					role="group"
					aria-roledescription="slide"
					class={cn(
						'min-w-0 shrink-0 grow-0 basis-full',
						config?.options.axis === 'x' ? 'pl-4' : 'pt-4'
					)}
				>
					{item}
				</div>
			{/each}
		</div>
	</div>
	<Button
		variant="ghost"
		class={cn(
			'absolute h-8 w-8 p-0 border-none',
			config?.options.axis === 'x'
				? '-left-12 top-1/2 -translate-y-1/2'
				: '-top-12 left-1/2 -translate-x-1/2 rotate-90'
		)}
		disabled={!canScrollPrev}
		on:click={onPrev}
	>
		<ArrowLeft class="h-4 w-4" />
		<span class="sr-only">Previous slide</span>
	</Button>
	<Button
		variant="ghost"
		class={cn(
			'absolute h-8 w-8 p-0 border-none',
			config?.options.axis === 'x'
				? '-right-12 top-1/2 -translate-y-1/2'
				: '-bottom-12 left-1/2 -translate-x-1/2 rotate-90'
		)}
		disabled={!canScrollNext}
		on:click={onNext}
	>
		<ArrowRight class="h-4 w-4" />
		<span class="sr-only">Next slide</span>
	</Button>
</div>
