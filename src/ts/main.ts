import { initControllers } from "./controllers";
import initControls from "./controls";
import { render } from "./renderer";
import { renderSettings } from "./renderer/settings";
import { store } from "./store";

function init() {
  initControls();

  initControllers();

  render();
  renderSettings();
}

(() => init())();
