<script>
	import { cn } from './utils';
</script>

<div class={cn('bg-slate-50 dark:bg-slate-900 py-6 px-8 rounded-lg shadow', $$props.class)}>
	<slot />
</div>
