const Discord = require("discord.js");
const os = require('os');

exports.run = async (bot, message, args) => {
    
    const cpuData = os.cpus()
    const getMembersCounts = async (guild) => {
        await guild.fetch();
        const total = guild.approximateMemberCount;
        const online = guild.approximatePresenceCount;
        let bots = false;
        if (guild.me.hasPermission('MANAGE_WEBHOOKS')) {
          const integrations = await guild.fetchIntegrations({ includeApplications: true });
          bots = integrations.filter(i => i.application && i.application.bot).size;
        };
        return {
          total,
          online,
          bots: bots || 'N/A',
          users: bots ? total - bots : 'N/A',
        }
    }
    
    const { total, online, bots, users } = await getMembersCounts(message.guild);

    const infoEmbed = new Discord.MessageEmbed() //Crée un embed
        .setColor('#FF0000') 
        .setAuthor(`${bot.user.username}`, bot.user.displayAvatarURL())
        .setTitle(`Info concernant mon hébergeur :`)
        .addFields(
            {
                name: 'CPU-INFO', 
                value: `\n**modèle** : ${cpuData[0].model}\n**cores :** ${cpuData.length}\n**Fréquence :** ${cpuData[0].speed}`
            },
            {
                name: 'Servers-Info',
                value: `Nombre de personne sur le serveur : **${total}**.
                \nDont : **${online} en ligne**.
                \nNombre de serveur : **${bot.guilds.cache.size}**.
                \nNombre de personnes totale tout serveurs confondu : **${bot.users.cache.size}**.`
            },
            
        )
        .setTimestamp()

    message.channel.send(infoEmbed); //envoie l'embed
    
};    

exports.help = {
    name: "info",
    aliases: ['i'],
    description: "Cette commande sert à donner des infos concernant FBI-Agent"
}

exports.requirements = {
    botOwner: false,
    botPerms: [],
    userPerms: ['MANAGE_MESSAGES']
}