<script lang="ts">
	import Header from '$lib/Header.svelte';
	import './styles.css';
</script>

<main class="max-w-xl mx-auto">
	<Header />
	<slot />
</main>
