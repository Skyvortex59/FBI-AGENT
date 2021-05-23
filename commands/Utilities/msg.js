const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    message.delete();
    message.channel.send(`Bonne année 2021 à tous ! `);
    message.channel.send("https://tenor.com/view/the-office-bonne-annee-fete-party-champagne-gif-10563552")
}

exports.help = {
    name: "2021",
    aliases: ['année']
}

exports.requirements = {
    botOwner: false,
    botPerms: [],
    userPerms: []
}
