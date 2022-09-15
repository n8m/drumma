import { Instrument } from "./instrument";

export const STEPS_COUNT = 16;

export interface IClock {
  startClock: () => void;
  setSpeedFaster: () => void;
  setSpeedSlower: () => void;
  getBpm: () => number;
  setBpm: (e: any) => void;
  getInstruments: () => Instrument[];
}

export class Clock implements IClock {
  private currentStep: number;
  private intervalId: ReturnType<typeof setInterval>;
  private instruments: Instrument[];
  private bpm: number;

  constructor(instruments: Instrument[]) {
    this.currentStep = 0;
    this.bpm = 119;
    this.instruments = instruments;
    this.renderClock();
  }

  public startClock = () => {
    if (this.intervalId) clearInterval(this.intervalId);

    const interval = this.countInterval(this.bpm);

    this.intervalId = setInterval(() => {
      this.currentStep++;
      if (this.currentStep === STEPS_COUNT) this.currentStep = 0;
      this.renderClock();

      this.instruments.forEach((instrument) => {
        const pattern = instrument.getPattern();
        if (pattern[this.currentStep]) {
          instrument.playSound();
        }
      });
    }, interval);
  };

  private renderClock = () => {
    document.querySelector("#steps").innerHTML = "";
    Array.from({ length: STEPS_COUNT }, (x, i) => {
      const element = document.createElement("span");
      element.innerText = this.currentStep === i ? "O" : "X";
      document.querySelector("#steps").append(element);
    });
  };

  private countInterval = (bpm: number) => {
    return 60000 / bpm / 2; //ms
  };

  public setSpeedFaster = () => {
    this.bpm = Math.round(this.bpm / 0.9);
    this.startClock();
  };

  public setSpeedSlower = () => {
    this.bpm = Math.round(this.bpm * 0.9);
    this.startClock();
  };

  public getBpm = () => {
    return this.bpm;
  };

  public setBpm = (e: any) => {
    this.bpm = parseInt(e.target.value, 10);
    this.startClock();
  };

  public getInstruments = () => {
    return this.instruments;
  };
}
