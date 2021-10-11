import * as http from '../../http';
import type { Result, Machine } from './types';

interface MachineResponse extends Machine {
  status: string;
}

interface AddMachineResponse {
  message: string;
  status_code: number;
  machine: MachineResponse;
}

export const addMachine = async (machine: Machine): Promise<Result<string>> => {
  const response = await http.post<Machine, AddMachineResponse>(
    'machines',
    machine
  );

  if (response.status_code !== 200) {
    return { err: response.message };
  }

  return { ok: response.message };
};
