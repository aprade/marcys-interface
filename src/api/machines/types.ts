export interface Result<T> {
  ok?: T;
  err?: string;
}

export interface Machine {
  nickname: string;
  ip: string;
}
