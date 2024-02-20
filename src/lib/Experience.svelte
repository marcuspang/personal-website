<script lang="ts">
	import { Badge } from './ui/Badge';
	import Container from './Container.svelte';

	export let role: string;
	export let company: string;
	export let description: string;
</script>

<Container>
	<h4 class="text-lg">{role}</h4>
	<p class="text-muted-foreground">{company}</p>

	<p class="pt-3 dark:text-gray-300">
		{description}
	</p>
</Container>
