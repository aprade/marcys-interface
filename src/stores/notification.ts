import { writable } from 'svelte/store';

type NotificationData = {
  message: string;
  variant: string;
};

export const notificationData = writable<NotificationData>({
  message: 'Working',
  variant: 'success'
});

export const showNotification = writable(false);

export const createNotification = (message: string, variant: string): void => {
  notificationData.set({
    message,
    variant
  });
  showNotification.set(true);

  setTimeout(() => {
    showNotification.set(false);
  }, 5000);
};
