export const leadZero = (num: number) => num.toString().padStart(2, '0');

export const setHTML = (el: HTMLElement | null, val: string | number) => el && (el.innerHTML = val.toString());

export const setValue = (el: HTMLElement | null, val: string | number) => el && 'value' in el && (el.value = val.toString());
