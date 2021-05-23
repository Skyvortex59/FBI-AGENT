const Discord = require("discord.js");

var functions = {
    sortie: async function(bot, message) {
        const includeChapter = [
            'chap',
            'Chap',
            'prochaine sortie',
            'sortie',
            'c quand la sortie',
            'prochain chapitre',
            'suite'
        ];
        
        includeChapter.some(element => {
            if (message.content.toLowerCase().includes(element)  && !message.author.bot) {
                const readyEmote = message.client.guilds.cache.get('323426566975782912').emojis.cache.get('832745343803850753');
                message.channel.send(`${readyEmote}`);
                
                const postCriptum = new Discord.MessageEmbed()
                    .setColor('#FF0000') 
                    .setAuthor(`${bot.user.username}`, bot.user.displayAvatarURL())
                    .setTitle(`Petit rappel.`)
                    .addFields({ 
                        name: "Si je répond à un message ne demandant pas la suite d'un(e) chapitre/vidéo ou encore une sortie.", 
                        value: "Ce n'est donc pas de ma faute, je ne suis qu'un robot maltraité par son maître." 
                    })
                    .setTimestamp()
                    
                message.channel.send(postCriptum);
            
            } //Si une personne dit les mot dans la variable include, le bot lui envoiera l'emote :QuandCestPret
        })
    },

    reacting: async function(bot, message) {

        let userMentionned = message.mentions.users.first();
            
        if(message.member.roles.cache.get('778716777021440010') && userMentionned) {
            if(message.guild.members.cache.get(userMentionned.id).roles.cache.get('724715926943170561')) {
                const banEmote = bot.guilds.cache.get('323426566975782912').emojis.cache.get('725008995655614484');
                message.reply(`Pas touche aux fouteurs de merde ${banEmote}!`);
            }
        }if (message.member.roles.cache.get('724715926943170561') && userMentionned) {
            if(message.guild.members.cache.get(userMentionned.id).roles.cache.get('778716777021440010')) {
                const patEmote = bot.guilds.cache.get('323426566975782912').emojis.cache.get('725008925748887572');
                message.reply(`Tu es sur la bonne voie ${patEmote} !`);
            }
        }
        
    },

    pedoCard: async function(bot, message) {
        const includePedoWord = [
            'loli',
            'shota',
            'petite fille',
            'petit garçon',
            'moins de 13 ans',
            'boku no pico',
        ];

        const dontInclude = [
            'aime pas',
            'haie'
        ]

        includePedoWord.some(element => {
            dontInclude.some(elmt => {
                if(message.content.toLowerCase().includes(element) && !message.content.toLowerCase().includes(elmt) && !message.author.bot) {
                    message.channel.send('https://giphy.com/gifs/police-fbi-agent-stop-right-there-26O4tnUKH85uVQ8MFl');

                    // const readyEmote = message.client.guilds.cache.get('323426566975782912').emojis.cache.get('832745343803850753');
                    // message.channel.send(`${readyEmote}`);
                
                } //Si une personne dit les mot dans la variable include, le bot lui envoiera l'emote :QuandCestPret
                // if(message.content.toLowerCase().includes(element) + message.content.toLowerCase().includes(elmt) && !message.author.bot){
                //     message.channel.send('https://gph.is/2CvYaA6');
                // }
            })
        })
    }

}

module.exports = functions;