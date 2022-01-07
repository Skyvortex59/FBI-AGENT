const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    
    if (message.author == "323426247285669899") {
        message.channel.send("J'aime mon maître ~~bien qu'il me martyrise avec ses erreurs...~~")
    } else {
        message.channel.send("Je te boude !")
    }
}

exports.help = {
    name: "favoritisme",
    aliases: ['fav']
}

exports.requirements = {
    botOwner: false,
    botPerms: [],
    userPerms: []
}
