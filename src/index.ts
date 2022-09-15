import { Clock } from "./clock";
import { Controls } from "./controls";
import { Instrument } from "./instrument";

const kick = new Instrument({ alias: "K", soundName: "kick.wav" });
const clap = new Instrument({ alias: "C", soundName: "clap.wav" });
const hat = new Instrument({ alias: "H", soundName: "hat.wav" });
const stick = new Instrument({ alias: "S", soundName: "stick.wav" });

const clock = new Clock([kick, clap, hat, stick]);
new Controls(clock);

clock.startClock();
