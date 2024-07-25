export const leadZero = (num: number) => num.toString().padStart(2, '0');

export const setHTML = (el: HTMLElement | null, val: string | number) => el && (el.innerHTML = val.toString());

export const setValue = (el: HTMLElement | null, val: string | number) => el && 'value' in el && (el.value = val.toString());

export function getFormattedTime(ms: number) {
  const timeLeftMinutes = Math.floor(ms / 1000 / 60);
  const timeLeftSeconds = (ms - timeLeftMinutes * 60 * 1000) / 1000;
  const timeLeftString = `${leadZero(timeLeftMinutes)}:${leadZero(timeLeftSeconds)}`;

  return timeLeftString;
}
