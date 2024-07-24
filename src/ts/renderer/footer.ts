import { EL_TEXTS } from "../consts";
import { LABELS } from '../labels';
import { store } from "../store";
import { leadZero } from '../utils';

export function renderFooter() {
  const currentOperation = store.state.breakRunning ? LABELS.RELAX : LABELS.WORK;

  const timeLeftMs = store.state.timeLeft;
  const timeLeftMinutes = Math.floor(timeLeftMs / 1000 / 60);
  const timeLeftSeconds = (timeLeftMs - timeLeftMinutes * 60 * 1000) / 1000;
  const timeLeftString = `${leadZero(timeLeftMinutes)}:${leadZero(timeLeftSeconds)}`;

  EL_TEXTS.TIME_OPERATION && (EL_TEXTS.TIME_OPERATION.innerHTML = currentOperation);
  EL_TEXTS.TIME_REMAINS && (EL_TEXTS.TIME_REMAINS.innerHTML = timeLeftString);
};
