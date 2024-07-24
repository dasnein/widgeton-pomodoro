import { BusEvents } from "../consts";
import { eventBus } from "../eventBus";
import { render } from "../renderer";
import { store } from "../store";

export function initControllers() {
  eventBus.on(BusEvents.Start, onStartButton);
  eventBus.on(BusEvents.Stop, onStopButton);
  eventBus.on(BusEvents.NextRound, onNextRound);
  eventBus.on(BusEvents.Reset, onResetButton);
}

function onStartButton() {
  store.startTimer();
  render();
}

function onStopButton() {
  store.stopTimer();
  render();
}

function onNextRound() {
  if (store.state.round >= store.settings.rounds && store.state.breakRunning) {
    return store.restartTimer();
  }

  if (store.state.breakRunning) {
    store.startNextRound();
  } else {
    store.startBreak();
  }
}

function onResetButton() {
  store.resetTimer();
  render();
}
