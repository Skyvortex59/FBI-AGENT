const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    
    let arg = message.content.split(' '); //
    if(arg[1]){
        if(!isNaN(arg[1]) && arg[1] >= 1  && arg[1] <= 99){
          
          message.channel.bulkDelete(arg[1])};
    };
};    

exports.help = {
    name: "clear",
    aliases: ['purge'],
    description: "Cette commande sert à supprimier jusqu'à 99 messages inclus : f:clear [0 à 99]"
}

exports.requirements = {
    botOwner: false,
    botPerms: [],
    userPerms: ['MANAGE_MESSAGES']
}