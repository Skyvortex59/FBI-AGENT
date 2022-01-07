const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

    let userMentionned = message.mentions.users.first();
    
    if(userMentionned) {
        const MentionnedEmbed = new Discord.MessageEmbed() //Crée un embed
            .setColor('#FF0000') 
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
            .setImage(userMentionned.displayAvatarURL({format: 'png' , size: 4096}))
            .setTitle(`Voici l'avatar de [${message.guild.members.cache.get(userMentionned.id).nickname}]`)
            .setTimestamp()

        return message.channel.send(MentionnedEmbed); //envoie l'embed
    }
    
    
    const embed = new Discord.MessageEmbed() //Crée un embed
        .setColor('#FF0000') 
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
        .setImage(message.author.displayAvatarURL({format: 'png' , size: 4096}))
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