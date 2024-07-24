import { StoreSettings, StoreState } from "./types"

export enum StorageKey {
  Settings = 'settings',
  State = 'state',
}

enum ButtonId {
  Start = 'button-start',
  Stop = 'button-stop',
  Settings = 'button-settings',
}

enum TextId {
  TimeOperation = 'time-operation',
  TimeRemains = 'time-remains',
  HeaderRoundCurrent = 'header-round-current',
  HeaderRoundsTotal = 'header-rounds-total',
}

enum TimerLogoId {
  Colored = 'timer-logo-colored',
  Colorless = 'timer-logo-colorless',
}

export const EL_BUTTONS = {
  START: document.getElementById(ButtonId.Start),
  STOP: document.getElementById(ButtonId.Stop),
  SETTINGS: document.getElementById(ButtonId.Settings),
}

export const EL_TEXTS = {
  TIME_OPERATION: document.getElementById(TextId.TimeOperation),
  TIME_REMAINS: document.getElementById(TextId.TimeRemains),
  HEADER_ROUND_CURRENT: document.getElementById(TextId.HeaderRoundCurrent),
  HEADER_ROUNDS_TOTAL: document.getElementById(TextId.HeaderRoundsTotal),
}

export const EL_TIMER = {
  LOGO_COLORED: document.getElementById(TimerLogoId.Colored),
  LOGO_COLORLESS: document.getElementById(TimerLogoId.Colorless),
}

export const DEFAULT_STORE_SETTINGS: StoreSettings = {
  focusPeriod: 25 * 60 * 1000,
  shortBreakPeriod: 5 * 60 * 1000,
  longBreakPeriod: 15 * 60 * 1000,
  rounds: 4,
};

export const DEFAULT_STORE_STATE: StoreState = {
  round: 0,
  running: false,
  breakRunning: false,
  timeLeft: 25 * 60 * 1000,
};

export enum BusEvents {
  Start = 'start',
  Stop = 'stop',
}

export enum ElementModifier {
  Hidden = 'hidden',
}
