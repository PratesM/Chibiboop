"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chibiboop = void 0;
const discord_js_1 = require("discord.js");
class Chibiboop {
    constructor(token) {
        this.botToken = token;
        this.client = new discord_js_1.Client({ intents: [] });
        this.client.login(this.botToken);
    }
}
exports.Chibiboop = Chibiboop;
