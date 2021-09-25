import { writable } from 'svelte/store';

export const machines = writable<Array<string>>(
  JSON.parse(localStorage.getItem('machines') || '[]')
);

machines.subscribe((machines: Array<string>) =>
  localStorage.setItem('machines', JSON.stringify(machines))
);

export const machine = writable<string>(
  localStorage.getItem('machine') || ''
);

machine.subscribe((machine: string) =>
  localStorage.setItem('machine', machine)
);
