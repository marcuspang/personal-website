<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Avatar from './ui/Avatar.svelte';
	import AvatarFallback from './ui/AvatarFallback.svelte';
	import AvatarImage from './ui/AvatarImage.svelte';
	import Button from './ui/Button.svelte';

	console.log($page.data);
</script>

<header class="bg-transparent">
	<div class="flex gap-6 md:gap-10 justify-between max-w-lg mx-auto">
		<a href="/" class="flex items-center">
			<span class="font-bold">Home</span>
		</a>
		<div class="flex space-x-2">
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
