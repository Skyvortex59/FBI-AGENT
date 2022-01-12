const Discord = require("discord.js");
const date = new Date;

exports.run = async (bot, message, args) => {
    
    message.channel.send(`Bonne année ${date.getFullYear()} à tous ! `);
    message.channel.send("https://tenor.com/view/the-office-bonne-annee-fete-party-champagne-gif-10563552")

}

exports.help = {
    name: `${date.getFullYear()}`,
    aliases: ['année'],
    description: "Cette commande sert à souhaité bonne année."
}

exports.requirements = {
    botOwner: false,
    botPerms: [],
    userPerms: []
}
