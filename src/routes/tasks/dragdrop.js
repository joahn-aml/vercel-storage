import { writable } from 'svelte/store';

/** @type {import("svelte/store").Writable<string | null>} */
export const dragged = writable(null);

/** @type {import("svelte/store").Writable<import("$lib/types/task").Status | null>} */
export const dropzone = writable(null);
