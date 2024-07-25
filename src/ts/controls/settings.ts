import { BusEvents, EL_SETTINGS_SLIDERS } from "../consts";
import { eventBus } from "../eventBus";
import { store } from "../store";

function initSettingsSliderRounds() {
  EL_SETTINGS_SLIDERS.ROUNDS?.addEventListener('input', (e: any) => {
    const newValue = Number(e.target.value as string);

    store.updateSettings({rounds: newValue});
    eventBus.dispatch(BusEvents.SettingsUpdated);
  })
}

export function initSettings() {
  initSettingsSliderRounds();
}
