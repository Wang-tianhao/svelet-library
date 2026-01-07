<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { counterStore } from '$lib/stores/counter.svelte';
</script>

<main class="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
	<h1 class="text-4xl font-bold">Welcome to SvelteKit</h1>
	<p class="text-muted-foreground">
		With Tailwind CSS v4 and shadcn-svelte
	</p>

	<div class="flex flex-col items-center gap-4 rounded-lg border p-6">
		<h2 class="text-2xl font-semibold">Svelte 5 Runes State Management</h2>
		<p class="text-lg">Count: {counterStore.count}</p>
		<p class="text-sm text-muted-foreground">Double: {counterStore.double}</p>
		<div class="flex gap-2">
			<Button variant="outline" onclick={() => counterStore.decrement()}>-</Button>
			<Button onclick={() => counterStore.increment()}>+</Button>
			<Button variant="secondary" onclick={() => counterStore.reset()}>Reset</Button>
		</div>
	</div>
</main>
