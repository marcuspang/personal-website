<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Logo from './Logo.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import { Avatar, AvatarFallback, AvatarImage } from './ui/Avatar';
	import { Button } from './ui/Button';

	let isDarkMode = true;

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			isDarkMode = true;
		} else {
			document.documentElement.classList.remove('dark');
			isDarkMode = false;
		}
	}
</script>

<header class="bg-transparent mb-4">
	<div class="flex justify-between max-w-xl mx-auto py-2">
		<a href="/" class="flex items-center">
			<Logo class="w-10 h-10 hover:opacity-80 transition-opacity" bind:isDarkMode />
		</a>
		<div class="flex space-x-2">
			<ThemeToggle bind:isDarkMode />
			{#if $page.data.session}
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
				<Button on:click={() => goto('/auth/signout')} variant="ghost">Sign Out</Button>
			{:else}
				<Button on:click={() => goto('/auth/signin')} variant="ghost">Sign In</Button>
			{/if}
		</div>
	</div>
</header>
