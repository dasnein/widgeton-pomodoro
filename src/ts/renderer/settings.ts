import { EL_SETTINGS_SLIDERS, EL_SETTINGS_VALUES, EL_TIMER, EL_VIEWS } from "../consts";
import { store } from "../store";
import { setHTML, setValue } from "../utils";

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
}
