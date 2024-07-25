import { TimerImage } from "../consts";

export type StoreSettings = {
  focusPeriod: number;
  shortBreakPeriod: number;
  longBreakPeriod: number;
  rounds: number;
  timerImage: TimerImage;
}

export type StoreState = {
  running: boolean;
  round: number;
  breakRunning: boolean;
  timeLeft: number;
  showSettings: boolean;
}

export interface ICallbackList {
  [id: string]: Function;
}

export interface IEventObject {
  [eventName: string]: ICallbackList;
}

export interface ISubscribe {
  unSubscribe: () => void;
}

export interface IEventBus {
  dispatch<T extends any[]>(eventName: string, ...args: T): void;
  on(eventName: string, callback: Function): ISubscribe;
  // subscribeOnce(eventName: string, callback: Function): ISubscribe;
  off(eventName: string): void;
}
