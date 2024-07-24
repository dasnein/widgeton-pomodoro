import { EL_AUDIO } from "../consts";
import { store } from "../store";

const play = (el: HTMLElement | null) => {
  el && 'play' in el && typeof el.play === 'function' && el.play();
}

export const audioController = {
  play() {
    if (store.state.breakRunning) {
      if (store.state.round === store.settings.rounds) {
        play(EL_AUDIO.LONG_BREAK);
      } else {
        play(EL_AUDIO.SHORT_BREAK);
      }
    } else {
      play(EL_AUDIO.WORK);
    }
  }
}