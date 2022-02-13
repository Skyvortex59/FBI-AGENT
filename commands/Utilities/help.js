const Discord = require("discord.js");
const fs = require("fs");

exports.run = async(bot, message, args) => {

    async function searchCommand(dirname) {
        fs.readdir(dirname, (err, files) => {
            if (err) console.error(err);
            for (let index = 0; index < files.length; index++) {
                fs.readFile(dirname + files[index], 'utf-8', (err, data) => {
                    if (err) {
                        console.error(err);
                        return
                    }
                    if (data.includes("name: ")) {
                        var res = "";
                        var nameRegex = /name:\s+\//g;
                        res += data.match(nameRegex)
                    }
                    console.log(res)
                })

            }


        })

    }

    searchCommand("./commands/Utilities/")


    var getDesc = bot.commands.get('avatar').help.description
    console.log(getDesc)


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