const Discord = require("discord.js");
const fetch = require('node-fetch');
const config = require("./Storage/config.json");
const log4js = require("log4js")
const log = require('./functions/log.js');
const bot = new Discord.Client();


bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.description = new Discord.Collection();
bot.event = new Discord.Collection();

const loadCommands = require("./functions/commands.js");
const loadEvents = require("./functions/events.js");

bot.logger = require("./functions/log.js");

const load = async () => {
    await loadCommands.run(bot);
    await loadEvents.run(bot);
    
}

bot.color = require("./Storage/color.json");
bot.functions = require("./functions/functions.js");


load();
bot.login(config.token);