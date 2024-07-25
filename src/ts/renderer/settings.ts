import { EL_SETTINGS_SLIDERS, EL_SETTINGS_VALUES, EL_TIMER, EL_VIEWS, SettingsSliderId } from "../consts";
import { store } from "../store";
import { getFormattedTime, setHTML, setValue } from "../utils";

const VISIBLE_CLASS = 'visible';

export function renderSettings() {
  const isOpened = store.state.showSettings;

  if (isOpened) {
    EL_VIEWS.SETTINGS?.classList.add(VISIBLE_CLASS);
  } else {
    EL_VIEWS.SETTINGS?.classList.remove(VISIBLE_CLASS);
  }

  setHTML(EL_SETTINGS_VALUES.ROUNDS, store.settings.rounds);
  setValue(EL_SETTINGS_SLIDERS.ROUNDS, store.settings.rounds);

  setHTML(EL_SETTINGS_VALUES.SHORT_BREAK, getFormattedTime(store.settings.shortBreakPeriod));
  setValue(EL_SETTINGS_SLIDERS.SHORT_BREAK, store.settings.shortBreakPeriod / 60 / 1000);

  setHTML(EL_SETTINGS_VALUES.LONG_BREAK, getFormattedTime(store.settings.longBreakPeriod));
  setValue(EL_SETTINGS_SLIDERS.LONG_BREAK, store.settings.longBreakPeriod / 60 / 1000);

  setHTML(EL_SETTINGS_VALUES.FOCUS, getFormattedTime(store.settings.focusPeriod));
  setValue(EL_SETTINGS_SLIDERS.FOCUS, store.settings.focusPeriod / 60 / 1000);

  const timerImageRadio = document.querySelector(`[name="${SettingsSliderId.TimerImage}"][value="${store.settings.timerImage}"]`);
  timerImageRadio && 'checked' in timerImageRadio && (timerImageRadio.checked = true);
}
