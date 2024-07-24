import { EL_TIMER } from "../consts";
import { store } from "../store";

export function renderTimer() {
  const timerPercentage = 100 - Math.floor(store.state.timeLeft * 100 / store.settings.focusPeriod);

  EL_TIMER.LOGO_COLORED && (EL_TIMER.LOGO_COLORED.style.height = `${timerPercentage}%`);
}