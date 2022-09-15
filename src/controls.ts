import { IClock } from "./clock";
import { AliasType } from "./instrument";

const housePattern: Record<AliasType, boolean[]> = {
  K: [
    true,
    false,
    true,
    false,
    true,
    false,
    true,
    false,
    true,
    false,
    true,
    false,
    true,
    false,
    true,
    false,
  ],
  C: [
    false,
    false,
    true,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    true,
    false,
  ],
  H: [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ],
  S: [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
};

const breaksPattern: Record<AliasType, boolean[]> = {
  K: [
    true,
    false,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    true,
    false,
    true,
    false,
    false,
  ],
  C: [
    false,
    false,
    true,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    true,
    false,
  ],
  H: [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ],
  S: [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
};

export class Controls {
  private clock: IClock;

  constructor(clock: IClock) {
    this.clock = clock;

    document.querySelector("#button-faster").addEventListener("click", () => {
      clock.setSpeedFaster();
      this.setSpeedToInput();
    });
    document.querySelector("#button-slower").addEventListener("click", () => {
      clock.setSpeedSlower();
      this.setSpeedToInput();
    });
    document
      .querySelector("#bpm-control")
      .addEventListener("input", clock.setBpm);

    document
      .querySelector("#house")
      .addEventListener("click", () => this.onSetPatternClicked(housePattern));
    document
      .querySelector("#breaks")
      .addEventListener("click", () => this.onSetPatternClicked(breaksPattern));

    this.setSpeedToInput();
  }

  setSpeedToInput() {
    const bpm = this.clock.getBpm();
    (document.querySelector("#bpm-control") as HTMLInputElement).value =
      bpm.toString();
  }

  onSetPatternClicked = (pattern: Record<AliasType, boolean[]>) => {
    const instruments = this.clock.getInstruments();
    instruments.forEach((instrument) => {
      instrument.setPattern(pattern[instrument.alias]);
    });
  };
}
