const Discord = require("discord.js");


exports.run = async (bot, message, args) => {
    message.delete();
    const cahier = new Discord.MessageEmbed() //Crée un embed
        .setColor('#FF0000') 
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
        .setTitle(`Aide`)
        .addField("Commande : Avatar", "Une commande qui sert à envoyer votre avatar")
        .addField("Commande : ping", "Vous envoie pong !")
        .addField("Commande : fun", "Je vous boude ou non !")
        .setTimestamp()
        .setFooter("Heureux de vous avoir aidé !")

    message.channel.send(cahier); //envoie l'embed

}

exports.help = {
    name: "help",
    aliases: ['aide']
}

exports.requirements = {
    botOwner: false,
    botPerms: [],
    userPerms: ["ADMINISTRATOR"]
}