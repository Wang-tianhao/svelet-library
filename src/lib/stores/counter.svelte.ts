/**
 * Example store using Svelte 5 runes for state management.
 *
 * Svelte 5 introduces runes ($state, $derived, $effect) for reactive state.
 * This pattern creates a shareable reactive store that can be imported
 * across components while maintaining reactivity.
 */

function createCounterStore() {
	let count = $state(0);

	return {
		get count() {
			return count;
		},
		get double() {
			return count * 2;
		},
		increment() {
			count++;
		},
		decrement() {
			count--;
		},
		reset() {
			count = 0;
		},
		set(value: number) {
			count = value;
		}
	};
}

export const counterStore = createCounterStore();
