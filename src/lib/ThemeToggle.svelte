<script lang="ts">
	import { Moon, Sun } from 'lucide-svelte';
	import { Button } from './ui/Button';
	import { browser } from '$app/environment';

	let darkMode = true;

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			darkMode = true;
		} else {
			document.documentElement.classList.remove('dark');
			darkMode = false;
		}
	}

	function handleSwitchDarkMode() {
		darkMode = !darkMode;

		if (darkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
</script>

<Button variant="ghost" size="icon" on:click={handleSwitchDarkMode}>
	<Sun class="h-[1.5rem] w-[1.3rem] dark:hidden" />
	<Moon class="hidden h-5 w-5 dark:block" />
	<span class="sr-only">Toggle theme</span>
</Button>
