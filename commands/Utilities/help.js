const Discord = require("discord.js");
const fs = require("fs");
const command = 


exports.run = async (bot, message, args) => {

    // async function searchCommand (dirname) {
    //     fs.readdir(dirname, (err, files) => {
    //         if(err) console.error(err);
            
            
    //     })
        
    // }
    
    // searchCommand("./commands/Utilities")


    const getDesc = async (description) => {
        await description;
        const desc = description.help;
        return desc
    }
    const asynchrone = await getDesc(bot);
    console.log(/*bot.aliases,*/ asynchrone)


    const cahier = new Discord.MessageEmbed() //Crée un embed
        .setColor('#FF0000') 
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
        .setTitle(`Aide`)
        .addField(`Commande : "test", "Une commande qui sert à envoyer votre avatar`)
        .setTimestamp()
        .setFooter("Heureux de vous avoir aidé !")

    message.channel.send(cahier); //envoie l'embed

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