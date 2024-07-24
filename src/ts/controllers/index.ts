import { BusEvents, EL_AUDIO } from "../consts";
import { eventBus } from "../eventBus";
import { render } from "../renderer";
import { store } from "../store";
import { audioController } from "./audio";

export function initControllers() {
  eventBus.on(BusEvents.Start, onStartButton);
  eventBus.on(BusEvents.Stop, onStopButton);
  eventBus.on(BusEvents.NextRound, onNextRound);
  eventBus.on(BusEvents.Reset, onResetButton);
}

function onStartButton() {
  if(store.state.round === 0) {
    audioController.play();
  }
  
  store.startTimer();
  render();
}

function onStopButton() {
  store.stopTimer();
  render();
}

function onNextRound() {
  if (store.state.round >= store.settings.rounds && store.state.breakRunning) {
    store.restartTimer();
  } else {
    if (store.state.breakRunning) {
      store.startNextRound();
    } else {
      store.startBreak();
    }
  }

  audioController.play();
}

function onResetButton() {
  store.resetTimer();
  render();
}
