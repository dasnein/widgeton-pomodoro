import { EL_BUTTONS, BusEvents } from "../consts";
import { store } from "../store";
import { eventBus } from '../eventBus';

export function initStopButton() {
  EL_BUTTONS.STOP?.addEventListener('click', () => {
    eventBus.dispatch(BusEvents.Stop);
  });
}
