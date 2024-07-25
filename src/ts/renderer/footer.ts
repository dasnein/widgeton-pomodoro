import { EL_TEXTS } from "../consts";
import { LABELS } from '../labels';
import { store } from "../store";
import { getFormattedTime, leadZero, setHTML } from '../utils';

export function renderFooter() {
  const currentOperation = store.state.breakRunning ? LABELS.RELAX : LABELS.WORK;

  setHTML(EL_TEXTS.TIME_OPERATION, currentOperation);
  setHTML(EL_TEXTS.TIME_REMAINS, getFormattedTime(store.state.timeLeft));
};
