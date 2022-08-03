import { Chibiboop } from "./Classes/Chibiboop";
import botConfig from "../config.json";

let token:string = botConfig.token;

let chibi = new Chibiboop(token);

chibi.client.on('ready', () => {
    console.log(`Logged in as ${chibi.client.user?.tag}!`);
});