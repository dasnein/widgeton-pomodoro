import { BusEvents, EL_SETTINGS_SLIDERS } from "../consts";
import { eventBus } from "../eventBus";
import { store } from "../store";

function initSettingsSliderRounds() {
  EL_SETTINGS_SLIDERS.ROUNDS?.addEventListener('input', (e: any) => {
    const newValue = Number(e.target.value as string);

    store.updateSettings({ rounds: newValue });
    eventBus.dispatch(BusEvents.SettingsUpdated);
  })
}

function initSettingsSliderShortBreak() {
  EL_SETTINGS_SLIDERS.SHORT_BREAK?.addEventListener('input', (e: any) => {
    const newValue = Number(e.target.value as string);

    store.updateSettings({ shortBreakPeriod: newValue * 60 * 1000 });
    eventBus.dispatch(BusEvents.SettingsUpdated);
  })
}

function initSettingsSliderLongBreak() {
  EL_SETTINGS_SLIDERS.LONG_BREAK?.addEventListener('input', (e: any) => {
    const newValue = Number(e.target.value as string);

    store.updateSettings({ longBreakPeriod: newValue * 60 * 1000 });
    eventBus.dispatch(BusEvents.SettingsUpdated);
  })
}

function initSettingsSliderFocus() {
  EL_SETTINGS_SLIDERS.FOCUS?.addEventListener('input', (e: any) => {
    const newValue = Number(e.target.value as string);

    store.updateSettings({ focusPeriod: newValue * 60 * 1000 });
    eventBus.dispatch(BusEvents.SettingsUpdated);
  })
}

export function initSettings() {
  initSettingsSliderRounds();
  initSettingsSliderShortBreak();
  initSettingsSliderLongBreak();
  initSettingsSliderFocus();
}
