import { BusEvents } from "../consts";
import { eventBus } from "../eventBus";
import { render } from "../renderer";
import { store } from "../store";

export function initControllers() {
  eventBus.on(BusEvents.Start, onStartButton);
  eventBus.on(BusEvents.Stop, onStopButton);
}

function onStartButton() {
  store.startTimer();
  render();
}

function onStopButton() {
  store.stopTimer();
  render();
}
