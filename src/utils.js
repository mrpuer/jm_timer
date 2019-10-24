export const minutesFromSec = sec => Math.floor(sec / 60);
export const extractsSeconds = sec => sec % 60;
export const msToSeconds = ms => Math.floor((ms / 1000) % 60);
export const msToMinutes = ms => Math.floor(ms / 60000);
export const extractMs = longMs => longMs % 1000;
export const playNotification = async () => {
  const audio = new Audio('notify.mp3');
  await audio.play();
};
