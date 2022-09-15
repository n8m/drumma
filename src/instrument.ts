import { STEPS_COUNT } from "./clock";

interface IInstrumentProps {
  alias: AliasType;
  soundName: string;
}

export type AliasType = "H" | "K" | "C" | "S";

export class Instrument {
  pattern: boolean[] = [
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
  ];

  private readonly soundName: string;
  readonly alias: AliasType;
  buttonsContainer: HTMLElement;

  constructor({ alias, soundName }: IInstrumentProps) {
    this.alias = alias;
    this.soundName = soundName;
    this.render();
  }

  private render = () => {
    const container = document.createElement("div");
    this.buttonsContainer = container;
    Array.from({ length: STEPS_COUNT }, (el, i) => {
      const button = document.createElement("button");
      button.id = `${this.alias}-${i}`;
      button.innerText = this.alias;
      container.append(button);
    });
    container.addEventListener("click", this.onPatternChanged);
    document.querySelector("#instruments").append(container);
  };

  private onPatternChanged = (e: any) => {
    if (e.target.tagName !== "BUTTON") return;

    const index = parseInt(e.target.id.split("-")[1]);
    e.target.classList.toggle("active");
    this.pattern[index] = !this.pattern[index];
  };

  public getPattern = () => {
    return this.pattern;
  };

  public playSound = () => {
    const audio = new Audio(this.soundName);
    audio.play();
  };

  public setPattern = (pattern: boolean[]) => {
    this.pattern = pattern;

    this.buttonsContainer.querySelectorAll("button").forEach((button, i) => {
      button.classList.remove("active");
      if (pattern[i]) {
        button.classList.add("active");
      }
    });
  };
}
