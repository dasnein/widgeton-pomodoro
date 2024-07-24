import { BusEvents, EL_BUTTONS } from "../consts";
import { eventBus } from "../eventBus";

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

export default function initControls() {
  initStartButton();
  initStopButton();
  initResetButton();
}
