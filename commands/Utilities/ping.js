const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

    if(message.mentions._content.split('!')[1] == 'ping' && !message.author.bot) {
        message.channel.send(`Pong !`);
    } else {
        message.channel.send(`Ping !`);
    }
    

}

exports.help = {
    name: "ping",
    aliases: ['pong'],
    description: "Cette commande sert à dire pong."
}

exports.requirements = {
    botOwner: false,
    botPerms: [],
    userPerms: []
}