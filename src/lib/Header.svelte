<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import ThemeToggle from './ThemeToggle.svelte';
	import { Avatar, AvatarFallback, AvatarImage } from './ui/Avatar';
	import { Button } from './ui/Button';

	console.log($page.data);
</script>

<header class="bg-transparent">
	<div class="flex justify-between max-w-xl mx-auto py-2">
		<a href="/" class="flex items-center">
			<span class="font-bold">Home</span>
		</a>
		<div class="flex space-x-2">
			<ThemeToggle />
			{#if $page.data.session}
				{#if $page.data.session.user?.image}
					<Avatar>
						<AvatarImage
							src={$page.data.session.user.image}
							alt={$page.data.session.user?.email ?? $page.data.session.user?.name}
						/>
						<AvatarFallback>Profile</AvatarFallback>
					</Avatar>
				{/if}
				<Button on:click={() => goto('/auth/signout')}>Sign Out</Button>
			{:else}
				<span class="notSignedInText">You are not signed in</span>
				<Button on:click={() => goto('/auth/signin')}>Sign In</Button>
			{/if}
		</div>
	</div>
</header>
