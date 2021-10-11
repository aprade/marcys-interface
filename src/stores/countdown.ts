import { writable } from 'svelte/store';

const COUNTDOWN_FROM = 45;

export const counter = writable(45);

export const countdown = (): void => {
  setTimeout(() => {
    counter.update((n: number): number => {
      if (n === 0) {
        return COUNTDOWN_FROM;
      }

      return n - 1;
    });
    countdown();
  }, 1000);
};
