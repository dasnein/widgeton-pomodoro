import { BusEvents, DEFAULT_STORE_SETTINGS, DEFAULT_STORE_STATE } from "../consts";
import { eventBus } from "../eventBus";
import { StoreSettings, StoreState } from "../types";
import storage from "../utils/storage";

class Store {
  private _state: StoreState;
  private _settings: StoreSettings;

  constructor() {
    this._init();
  }

  private _init() {
    this._loadSettings();
    this._loadState();
  }

  private _loadSettings() {
    const savedSettings = storage.loadSettings();
    this._settings = {
      ...DEFAULT_STORE_SETTINGS,
      ...savedSettings,
    }
  }

  private _loadState() {
    const savedState = storage.loadState();
    this._state = {
      ...DEFAULT_STORE_STATE,
      timeLeft: this._settings.focusPeriod,
      ...savedState,
    }
  }

  startTimer() {
    this._state.running = true;

    this.state.round = this.state.round || 1;

    this.reduceTimer();
  }

  stopTimer() {
    this._state.running = false;
  }

  reduceTimer() {
    this.state.round > 0 && (this._state.timeLeft = this._state.timeLeft - 1000);

    if (this._state.timeLeft < 0) {
      return eventBus.dispatch(BusEvents.NextRound);
    }

    this._state.running && setTimeout(this.reduceTimer.bind(this), 1000);
  }

  resetTimer() {
    this._init();
  }

  restartTimer() {
    this._loadState();
    this.startTimer();
  }

  startBreak() {
    this._state.breakRunning = true;
    this._state.timeLeft = this.state.round === this.settings.rounds
      ? this.settings.longBreakPeriod
      : this.settings.shortBreakPeriod;
    this.reduceTimer();
  }

  startNextRound() {
    this._state.breakRunning = false;
    this._state.round += 1;
    this._state.timeLeft = this.settings.focusPeriod;
    this.reduceTimer();
  }

  get settings() {
    return this._settings;
  }

  get state() {
    return this._state;
  }
}

export const store = new Store();
