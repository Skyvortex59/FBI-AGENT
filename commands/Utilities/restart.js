const Discord = require("discord.js");
const config = require("../../Storage/config.json");


exports.run = async (bot, message, args) => {
    
    await message.channel.send(`Déconnexion...`);
    const loadEmote = bot.guilds.cache.get('323426566975782912').emojis.cache.get('832711946510925854');
    await message.channel.send(`Reconnexion dans 5 ${loadEmote}`)
    
    var counter = 5;
    var intervalId = null;
    async function finish() {
        await bot.destroy(config.token);
        await bot.login(config.token);
        await clearInterval(intervalId);	
    }
    function alert() {
        counter--;
        if(counter == 0) {
            finish();
            message.channel.send(`Je suis reconnecté ! ${reactionEmoji}`);
        }else {	
            message.channel.send(counter + ` ${loadEmote}`);
        }
    };
    
    intervalId = setInterval(alert, 1000);
    
    const reactionEmoji = bot.guilds.cache.get('323426566975782912').emojis.cache.get('828318040550277170');
}

exports.help = {
    name: "restart",
    aliases: ['r'],
    description: "Cette commande sert à restart le bot."
}

exports.requirements = {
    botOwner: false,
    botPerms: [],
    userPerms: ['ADMINISTRATOR']
}
