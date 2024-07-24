import { store } from "../store";
import { renderControls } from "./controls";
import { renderFooter } from "./footer";
import { renderHeader } from "./header";
import { renderTimer } from "./timer";

export function render() {
  renderControls();
  renderFooter();
  renderTimer();
  renderHeader();

  if (store.state.running) {
    window.requestAnimationFrame(render);
  }
}
