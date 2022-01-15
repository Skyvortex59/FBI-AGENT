const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

    //Si on demande l'aide sur une commande
    if (args) {
    
        //Récupération de la commande
        const command = args.shift().toLowerCase();
        const cmd = bot.commands.get(command) || bot.aliases.get(command);

        if (!cmd) return message.channel.send('Commande introuvable');

        const cahier = new Discord.MessageEmbed() //Crée un embed
            .setColor('#FF0000') 
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
            .setTitle(`Aide`)
            .addField(`Commande : ${cmd.help.name}, ${cmd.help.description}`)
            .setTimestamp()
            .setFooter("Heureux de vous avoir aidé !")

        message.channel.send(cahier); //envoie l'embed
        
    }

}

exports.help = {
    name: "help",
    aliases: ['aide'],
    description: "Cette commande sert lister toutes les commandes du bot : f!help"
}

exports.requirements = {
    botOwner: false,
    botPerms: [],
    userPerms: ["ADMINISTRATOR"]
}
