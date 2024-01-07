<script lang="ts">
	import { browser } from '$app/environment';
	import Logo from '$lib/Logo.svelte';
	import { darkModeStore } from '$lib/store';
	import ThemeToggle from './ThemeToggle.svelte';

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			darkModeStore.set(true);
		} else {
			document.documentElement.classList.remove('dark');
			darkModeStore.set(false);
		}
	}
</script>

<header class="bg-transparent mb-4">
	<div class="flex justify-between max-w-xl mx-auto py-2">
		<a href="/" class="flex items-center">
			<Logo class="w-10 h-10 hover:opacity-80 transition-opacity" />
		</a>
		<div class="flex space-x-2">
			<ThemeToggle />
			<!-- {#if $page.data.session}
				{#if $page.data.session.user?.image}
					<Avatar>
						<AvatarImage
							src={$page.data.session.user.image}
							alt={$page.data.session.user?.email ?? $page.data.session.user?.name}
							class="hover:opacity-80 transition-opacity"
						/>
						<AvatarFallback>PFP</AvatarFallback>
					</Avatar>
				{/if}
				<Button on:click={() => goto('/auth/signout')} variant="outline">Sign Out</Button>
			{:else}
				<Button on:click={() => goto('/auth/signin')} variant="outline">Sign In</Button>
			{/if} -->
		</div>
	</div>
</header>
