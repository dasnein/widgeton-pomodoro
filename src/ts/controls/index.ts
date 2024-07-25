import { BusEvents, EL_BUTTONS } from "../consts";
import { eventBus } from "../eventBus";
import { initSettings } from "./settings";

function initStartButton() {
  EL_BUTTONS.START?.addEventListener('click', () => {
    eventBus.dispatch(BusEvents.Start);
  });
}

function initStopButton() {
  EL_BUTTONS.STOP?.addEventListener('click', () => {
    eventBus.dispatch(BusEvents.Stop);
  });
}

function initResetButton() {
  EL_BUTTONS.RESET?.addEventListener('click', () => {
    eventBus.dispatch(BusEvents.Reset);
  });
}

function initSettingsShowButton() {
  EL_BUTTONS.SETTINGS_SHOW?.addEventListener('click', () => {
    eventBus.dispatch(BusEvents.SettingsShow);
  });
}

function initSettingsCloseButton() {
  EL_BUTTONS.SETTINGS_CLOSE?.addEventListener('click', () => {
    eventBus.dispatch(BusEvents.SettingsClose);
  });
}

export default function initControls() {
  initStartButton();
  initStopButton();
  initResetButton();
  initSettingsShowButton();
  initSettingsCloseButton();

  initSettings();
}
