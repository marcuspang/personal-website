<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Analytics from '$lib/Analytics.svelte';
	import './styles.css';
</script>

<Analytics />
<main class="max-w-xl mx-auto px-4 pb-12">
	<Header />
	<slot />
</main>
