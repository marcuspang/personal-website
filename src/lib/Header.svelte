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

<header class="mb-4 bg-transparent">
	<div class="flex justify-between max-w-xl py-2 mx-auto">
		<a href="/" class="flex items-center">
			<Logo class="w-10 h-10 transition-opacity hover:opacity-80" />
		</a>
		<div class="flex items-center space-x-2">
			<div class="space-x-3 text-sm">
				<a href="#about-me" class="hover:underline">About Me</a>
				<a href="#experience" class="hover:underline">Experience</a>
				<a href="#past-hackathons" class="hover:underline">Hackathons</a>
				<a href="#links" class="hover:underline">Links</a>
			</div>
			<ThemeToggle />
			<!-- {#if $page.data.session}
				{#if $page.data.session.user?.image}
					<Avatar>
						<AvatarImage
							src={$page.data.session.user.image}
							alt={$page.data.session.user?.email ?? $page.data.session.user?.name}
							class="transition-opacity hover:opacity-80"
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
