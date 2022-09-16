import { Clock } from "./clock";
import { Controls } from "./controls";
import { Instrument } from "./instrument";

const kick = new Instrument({ alias: "K", soundName: "./sounds/kick.wav" });
const clap = new Instrument({ alias: "C", soundName: "./sounds/clap.wav" });
const hat = new Instrument({ alias: "H", soundName: "./sounds/hat.wav" });
const stick = new Instrument({ alias: "S", soundName: "./sounds/stick.wav" });

const clock = new Clock([kick, clap, hat, stick]);
new Controls(clock);

clock.startClock();
