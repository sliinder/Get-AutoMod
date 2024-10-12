const express = require('express');
const app = express();
app.listen(() => console.log('iq server'));
app.use('/ping', (req, res) => {
    res.send(new Date());
});
const Discord = require("discord.js");
const { Collection } = require("discord.js");
const client = new Discord.Client({ intents: 3276799 });

const { loadEvents } = require("./Handlers/eventHandler");

client.config = require("./config.json");
client.events = new Collection();
client.commands = new Collection();

loadEvents(client);

client.login("bot token here");
