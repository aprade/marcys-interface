import * as http from '../../http';
import type { Machine, Result } from './types';
import { state, history } from '../../stores/machines';

interface MachineCPU {
  frequency: number;
  logical_cores: number;
  physical_cores: number;
  load_average: {
    one: number;
    five: number;
    fifteen: number;
  };
  timestamp?: Date;
}

interface MachineMemory {
  total: number;
  free: number;
  used: number;
  shared: number;
  buffers: number;
  cached: number;
  timestamp?: Date;
}

export interface MachineState {
  cpu: MachineCPU;
  memory: MachineMemory;
}

export interface MachineResponse {
  machineHistory: Array<MachineState>;
  machineState: MachineState;
}

interface Response extends MachineResponse {
  message?: string;
  status_code: number;
}

export const getMachine = (machine: string): void => {
  http.get<Response>(`machines/${machine}`).then(res => {
    if (res.status_code === 200) {
      state.set({ ok: res.machineState });
      history.set({ ok: res.machineHistory });
    } else {
      state.set({ err: res.message });
      history.set({ err: res.message });
    }
  });
};
