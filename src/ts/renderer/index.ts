import { store } from "../store";
import { renderControls } from "./controls";
import { renderFooter } from "./footer";
import { renderTimer } from "./timer";

export function render() {
  renderControls();
  renderFooter();
  renderTimer();

  if (store.state.running) {
    window.requestAnimationFrame(render);
  }
}
