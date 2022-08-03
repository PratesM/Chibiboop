"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Chibiboop_1 = require("./Classes/Chibiboop");
const config_json_1 = __importDefault(require("../config.json"));
let token = config_json_1.default.token;
let chibi = new Chibiboop_1.Chibiboop(token);
chibi.client.on('ready', () => {
    var _a;
    console.log(`Logged in as ${(_a = chibi.client.user) === null || _a === void 0 ? void 0 : _a.tag}!`);
});
