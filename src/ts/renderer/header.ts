import { EL_TEXTS } from "../consts";
import { store } from "../store";

export function renderHeader() {
  EL_TEXTS.HEADER_ROUND_CURRENT && (EL_TEXTS.HEADER_ROUND_CURRENT.innerHTML = store.state.round.toString());
  EL_TEXTS.HEADER_ROUNDS_TOTAL && (EL_TEXTS.HEADER_ROUNDS_TOTAL.innerHTML = store.settings.rounds.toString());
};
