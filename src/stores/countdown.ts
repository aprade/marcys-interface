import { writable } from 'svelte/store';

type TimerAPIStartFunction = () => void;
interface TimerAPI {
    start: TimerAPIStartFunction;
}

const COUNTDOWN_FROM = 46 * 1000;

const formatter = new Intl.DateTimeFormat('en', {
  hour12: false,
  minute: undefined,
  second: '2-digit'
});

export const time = writable(formatter.format(COUNTDOWN_FROM));
export const isCycleComplete = writable(false);

export const createTimer = (): TimerAPI => {
  let animationRef: number;
  let lastestStartTime: number | undefined;
  const remainingTime = COUNTDOWN_FROM;

  const animate = (timestamp: number) => {
    if (lastestStartTime === undefined) {
      lastestStartTime = timestamp + remainingTime;
    }

    const currentTime = lastestStartTime - timestamp;
    if (currentTime <= 0) {
      lastestStartTime = undefined;
      cancelAnimationFrame(animationRef);
      time.set(formatter.format(COUNTDOWN_FROM));
      isCycleComplete.set(true);
    } else {
      isCycleComplete.set(false);
      time.set(formatter.format(currentTime));
    }
    animationRef = requestAnimationFrame(animate);
  };

  const api = {
    start: () => {
      animationRef = requestAnimationFrame(animate);
    }
  };

  return api;
};

export const timer = createTimer();
