<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Analytics from '$lib/Analytics.svelte';
	import './styles.css';
</script>

<Analytics />
<main class="px-4 pb-12 mx-auto max-w-xl">
	<Header />
	<slot />
</main>
