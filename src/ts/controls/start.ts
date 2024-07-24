import { EL_BUTTONS, BusEvents } from "../consts";
import { store } from "../store";
import { eventBus } from '../eventBus';

export function initStartButton() {
  EL_BUTTONS.START?.addEventListener('click', () => {
    eventBus.dispatch(BusEvents.Start);
  });
}