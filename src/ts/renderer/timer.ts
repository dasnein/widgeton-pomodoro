import { EL_TIMER } from "../consts";
import { store } from "../store";

export function renderTimer() {
  const isLastRound = store.state.round === store.settings.rounds;
  const totalPeriod = store.state.breakRunning
    ? isLastRound
      ? store.settings.longBreakPeriod
      : store.settings.shortBreakPeriod
    : store.settings.focusPeriod;
  const timerPercentage = 100 - Math.floor(store.state.timeLeft * 100 / totalPeriod);

  EL_TIMER.LOGO_COLORED && (EL_TIMER.LOGO_COLORED.style.height = `${timerPercentage}%`);
}