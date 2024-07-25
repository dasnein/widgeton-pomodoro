import { EL_TIMER, EL_VIEWS } from "../consts";
import { store } from "../store";
import { setStyle } from "../utils";

export function renderTimer() {
  const isLastRound = store.state.round === store.settings.rounds;
  const totalPeriod = store.state.breakRunning
    ? isLastRound
      ? store.settings.longBreakPeriod
      : store.settings.shortBreakPeriod
    : store.settings.focusPeriod;
  const timerPercentage = 100 - Math.floor(store.state.timeLeft * 100 / totalPeriod);

  setStyle(EL_TIMER.LOGO_COLORED, 'height', `${timerPercentage}%`);

  EL_VIEWS.TIMER && (EL_VIEWS.TIMER.dataset.timerImage = store.settings.timerImage);
}
