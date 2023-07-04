<script lang="ts">
	import { page } from '$app/stores';
</script>

{#if $page.data.session}
	<section class="py-8">
		<h1 class="tracking-tight text-primary font-semibold text-2xl pb-1">Manga Tracker</h1>
		
	</section>
{:else}
	<h1>Access Denied</h1>
	<p>
		<a href="/auth/signin"> You must be signed in to view this page </a>
	</p>
{/if}
