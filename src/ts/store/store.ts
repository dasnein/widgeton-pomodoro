import { DEFAULT_STORE_SETTINGS, DEFAULT_STORE_STATE } from "../consts";
import { StoreSettings, StoreState } from "../types";
import storage from "../utils/storage";

class Store {
  private _state: StoreState;
  private _settings: StoreSettings;

  constructor() {
    this._loadSettings();
    this._loadState();
  }

  private _loadSettings() {
    const savedSettings = storage.loadSettings();
    this._settings = {
      ...DEFAULT_STORE_SETTINGS,
      ...savedSettings,
    }

    console.log(this._settings);
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
    this.reduceTimer();
  }

  stopTimer() {
    this._state.running = false;
  }

  reduceTimer() {
    this._state.timeLeft = this._state.timeLeft - 1000;

    this._state.running && setTimeout(this.reduceTimer.bind(this), 1000);
  }

  get settings() {
    return this._settings;
  }

  get state() {
    return this._state;
  }
}

export const store = new Store();
