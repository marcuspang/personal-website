<script lang="ts">
	import { cn } from '$lib/utils';
	import { Avatar as AvatarPrimitive } from 'radix-svelte';

	console.log($$props);
</script>

<AvatarPrimitive.Image {...$$props} class={cn('aspect-square h-full w-full', $$props.class)}>
	<slot />
</AvatarPrimitive.Image>
