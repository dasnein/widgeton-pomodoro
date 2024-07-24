import { store } from "../store";
import { EL_BUTTONS, ElementModifier } from "../consts";

export function renderControls() {
  if (store.state.running) {
    EL_BUTTONS.START?.classList.add(ElementModifier.Hidden);
    EL_BUTTONS.STOP?.classList.remove(ElementModifier.Hidden);
  } else {
    EL_BUTTONS.START?.classList.remove(ElementModifier.Hidden);
    EL_BUTTONS.STOP?.classList.add(ElementModifier.Hidden);
  }
}
