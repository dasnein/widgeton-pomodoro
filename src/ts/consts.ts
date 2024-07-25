import { StoreSettings, StoreState } from "./types"

export enum StorageKey {
  Settings = 'settings',
  State = 'state',
}

enum ViewId {
  Timer = 'view-timer',
  Settings = 'view-settings',
}

enum ButtonId {
  Start = 'button-start',
  Stop = 'button-stop',
  SettingsShow = 'button-settings-show',
  SettingsClose = 'button-settings-close',
  Reset = 'button-reset',
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

enum AudioId {
  LongBreak = 'audio-long-break',
  ShortBreak = 'audio-short-break',
  Work = 'audio-work',
}

enum SettingsValueId {
  FocusPeriod = 'settings-value-focus-period',
  LongBreakPeriod = 'settings-value-long-break-period',
  Rounds = 'settings-value-rounds',
  ShortBreakPeriod = 'settings-value-short-break-period',
}

export enum SettingsSliderId {
  FocusPeriod = 'settings-slider-focus-period',
  LongBreakPeriod = 'settings-slider-long-break-period',
  Rounds = 'settings-slider-rounds',
  ShortBreakPeriod = 'settings-slider-short-break-period',
  TimerImage = 'timer-image',
}

export enum TimerImage {
  Ru = 'ru',
  En = 'en',
}

export const EL_BUTTONS = {
  RESET: document.getElementById(ButtonId.Reset),
  SETTINGS_CLOSE: document.getElementById(ButtonId.SettingsClose),
  SETTINGS_SHOW: document.getElementById(ButtonId.SettingsShow),
  START: document.getElementById(ButtonId.Start),
  STOP: document.getElementById(ButtonId.Stop),
}

export const EL_TEXTS = {
  HEADER_ROUND_CURRENT: document.getElementById(TextId.HeaderRoundCurrent),
  HEADER_ROUNDS_TOTAL: document.getElementById(TextId.HeaderRoundsTotal),
  TIME_OPERATION: document.getElementById(TextId.TimeOperation),
  TIME_REMAINS: document.getElementById(TextId.TimeRemains),
}

export const EL_TIMER = {
  LOGO_COLORED: document.getElementById(TimerLogoId.Colored),
  LOGO_COLORLESS: document.getElementById(TimerLogoId.Colorless),
}

export const EL_AUDIO = {
  LONG_BREAK: document.getElementById(AudioId.LongBreak),
  SHORT_BREAK: document.getElementById(AudioId.ShortBreak),
  WORK: document.getElementById(AudioId.Work),
}

export const EL_VIEWS = {
  SETTINGS: document.getElementById(ViewId.Settings),
  TIMER: document.getElementById(ViewId.Timer),
};

export const EL_SETTINGS_VALUES = {
  FOCUS: document.getElementById(SettingsValueId.FocusPeriod),
  LONG_BREAK: document.getElementById(SettingsValueId.ShortBreakPeriod),
  ROUNDS: document.getElementById(SettingsValueId.Rounds),
  SHORT_BREAK: document.getElementById(SettingsValueId.LongBreakPeriod),
}

export const EL_SETTINGS_SLIDERS = {
  FOCUS: document.getElementById(SettingsSliderId.FocusPeriod),
  LONG_BREAK: document.getElementById(SettingsSliderId.ShortBreakPeriod),
  ROUNDS: document.getElementById(SettingsSliderId.Rounds),
  SHORT_BREAK: document.getElementById(SettingsSliderId.LongBreakPeriod),
}

export const DEFAULT_STORE_SETTINGS: StoreSettings = {
  focusPeriod: 25 * 60 * 1000,
  shortBreakPeriod: 5 * 60 * 1000,
  longBreakPeriod: 15 * 60 * 1000,
  rounds: 4,
  timerImage: TimerImage.En,
};

export const DEFAULT_STORE_STATE: StoreState = {
  round: 0,
  running: false,
  breakRunning: false,
  timeLeft: 25 * 60 * 1000,
  showSettings: false,
};

export enum BusEvents {
  Start = 'start',
  Stop = 'stop',
  NextRound = 'next-round',
  Reset = 'reset',
  SettingsShow = 'settings-show',
  SettingsClose = 'settings-close',
  SettingsUpdated = 'settings-updated',
}

export enum ElementModifier {
  Hidden = 'hidden',
}
