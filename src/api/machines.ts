import * as http from '../http';

interface Result {
  ok: boolean;
  message: string;
}

interface Machine {
  nickname: string;
  ip: string;
}

interface MachineResponse extends Machine {
  status: string;
}

interface AddMachineResponse {
  message: string;
  status_code: number;
  machine: MachineResponse;
}

export const addMachine = async (machine: Machine): Promise<Result> => {
  const response = await http.post<Machine, AddMachineResponse>(
    'machines',
    machine
  );

  if (response.status_code !== 200) {
    return { ok: false, message: response.message };
  }

  return { ok: false, message: response.message };
};
