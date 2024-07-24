import { StorageKey } from "../consts";
import { StoreSettings, StoreState } from "../types";

export default {
  loadSettings: (): StoreSettings | {} => JSON.parse(localStorage.getItem(StorageKey.Settings) || '{}'),
  saveSettings: (settings: StoreSettings): void => localStorage.setItem(StorageKey.Settings, JSON.stringify(settings)),
  loadState: (): StoreState | {} => JSON.parse(localStorage.getItem(StorageKey.State) || '{}'),
  saveState: (state: StoreState): void => localStorage.setItem(StorageKey.State, JSON.stringify(state)),
}