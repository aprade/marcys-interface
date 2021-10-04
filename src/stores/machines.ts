import { writable } from 'svelte/store';
import type { Result, MachineState } from 'src/api/machines';

export const machines = writable<Array<string>>(
  JSON.parse(localStorage.getItem('machines') || '[]')
);

machines.subscribe((machines: Array<string>) =>
  localStorage.setItem(
    'machines',
    JSON.stringify(machines.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0)))
  )
);

export const machine = writable<string>(localStorage.getItem('machine') || '');

machine.subscribe((machine: string) =>
  localStorage.setItem('machine', machine)
);

export const state = writable<Result<MachineState>>(
  JSON.parse(localStorage.getItem('state') || '{ "err": "No state yet" }')
);

state.subscribe((state: Result<MachineState>) =>
  localStorage.setItem('state', JSON.stringify(state))
);

export const history = writable<Result<MachineState[]>>(
  JSON.parse(localStorage.getItem('history') || '{ "err": "No history yet" }')
);

history.subscribe((history: Result<MachineState[]>) =>
  localStorage.setItem('history', JSON.stringify(history))
);
