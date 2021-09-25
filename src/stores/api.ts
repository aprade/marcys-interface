import { writable } from 'svelte/store';

export const isApiUp = writable<boolean>(true);
