import Discord, { Client } from 'discord.js';

export class Chibiboop {
    botToken:string;
    client:Discord.Client;

    constructor(token:string){
        this.botToken = token;
        this.client = new Client({intents:[]});

        this.client.login(this.botToken);
    }
}