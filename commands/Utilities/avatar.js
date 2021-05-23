const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

    message.delete();
    const embed = new Discord.MessageEmbed() //Crée un embed
        .setColor('#FF0000') 
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
        .setImage(message.author.displayAvatarURL())
        .setTitle(`Voici votre avatar`)
        .setTimestamp()

    message.channel.send(embed); //envoie l'embed

};

exports.help = {
    name: "avatar",
    aliases: ['pp']
};

exports.requirements = {
    botOwner: false,
    botPerms: [],
    userPerms: []
};