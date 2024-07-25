import { BusEvents, EL_AUDIO } from "../consts";
import { eventBus } from "../eventBus";
import { render } from "../renderer";
import { renderSettings } from "../renderer/settings";
import { store } from "../store";
import storage from "../utils/storage";
import { audioController } from "./audio";

export function initControllers() {
  eventBus.on(BusEvents.Start, onStartButton);
  eventBus.on(BusEvents.Stop, onStopButton);
  eventBus.on(BusEvents.NextRound, onNextRound);
  eventBus.on(BusEvents.Reset, onResetButton);
  eventBus.on(BusEvents.SettingsShow, onShowSettings);
  eventBus.on(BusEvents.SettingsClose, onCloseSettings);
  eventBus.on(BusEvents.SettingsUpdated, onSettingsUpdate);
}

function onStartButton() {
  if (store.state.round === 0) {
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

function onShowSettings() {
  store.toggleSettings(true);
  renderSettings();
}

function onCloseSettings() {
  store.toggleSettings(false);
  renderSettings();
}

function onSettingsUpdate() {
  storage.saveSettings(store.settings);
  renderSettings();
}
