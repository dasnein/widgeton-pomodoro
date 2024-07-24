import { initControllers } from "./controllers";
import initControls from "./controls";
import { render } from "./renderer";
import { store } from "./store";

function init() {
  initControls();

  initControllers();

  render();
}

(() => init())();
