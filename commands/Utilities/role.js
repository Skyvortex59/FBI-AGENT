const Discord = require("discord.js");
const fs = require('fs')

exports.run = async (bot, message, args) => {

    let arg = message.content.split(' ');
    arg.splice(arg[0], 2);
    console.log(arg);
    // let filter = msg => msg.content.includes(args[1]) || msg.author;
    let YesResponsefilter = msg => {msg.content.toLowerCase().includes('oui') && msg.author.id == message.author.id};
    
    // let command = {
    //     create: 'create'
    // }

    

    // console.log(args[1])

    function createCategory() {
        message.reply(`${args[1]} est-ce bien ça ?`).then(() => {

            message.channel.awaitMessages(YesResponsefilter, {time: 5000, max: 1}).then(collected => {
                
                // console.log(collected)

                let roleMenu = require('../../Storage/roleMenu.json');

                console.log(roleMenu);

                roleMenu.push({'category': args[1]});
                
                let data = JSON.stringify(roleMenu, null, 2);

                if(roleMenu.find(e => e.category == args[1])) {
                    message.reply(`La catégorie : 「${args[1]}」 existe déjà...`);
                }else {
                    fs.writeFile('Storage/roleMenu.json', data, (err) => {
                        if(err) throw err;
                        message.channel.send(`le nom de catégorie 「${args[1]}」 a bien été enregistré !`);
                        console.log('Data written to file.');
                    });
                }
                console.log("Après l'écriture de roleMenu.json");
            })
            
        })
    }

    function addRole () {
            
            message.reply(`「${arg.join(', ')}」, est-ce bien ça ?`).then(() => {

                message.channel.awaitMessages(YesResponsefilter, {time: 5000, max: 1}).then(collected => {
    
                    message.channel.send("Donnez moi les emotes correspondant à ces roles (dans le même ordre que les rôles)").then(() => {
                        
                        Emotefilter = msg => {msg.author.id == message.author.id};

                        arg.splice(arg.length);

                        console.log(arg)
                        
                        message.channel.awaitMessages(Emotefilter, {time: 15000, max: 1}).then(collected => {
                            
                            message.reply(`「${arg.join(', ')}」 Est-ce bon ?`);
                            
                            console.log(`arg : ${arg}`)

                            message.channel.awaitMessages(YesResponsefilter, {time: 5000, max: 1}).then(collected => {
                                
                                console.log(collected)
                                message.channel.send('Test fini')
                                
                                // let roleMenu = require('../../Storage/roleMenu.json');
    
                                // console.log(roleMenu);
                
                                // roleMenu.push({'category': args[1]});
                                
                                // let data = JSON.stringify(roleMenu, null, 2);
                
                                // if(roleMenu.find(e => e.category == args[1])) {
                                //     message.reply(`La catégorie : 「${args[1]}」 existe déjà...`);
                                // }else {
                                //     fs.writeFile('Storage/roleMenu.json', data, (err) => {
                                //         if(err) throw err;
                                //         message.channel.send(`le nom de catégorie 「${args[1]}」 a bien été enregistré !`);
                                //         console.log('Data written to file.');
                                //     });
                                // }
                                // console.log("Après l'écriture de roleMenu.json");

                            })
                        })
                    })
                    
                    
                })
                
            })
        
        
    }
    
    switch (args[0]) {
        case 'create':
            if(!args[1]) {
                message.channel.send("Vous n'avez pas mis de nom de catégorie, vous devez écrire `f!role create [nom de votre catégorie]`")
            }else {
                createCategory();
            }
            break;

        case 'addRole':
            if(!args[1]) {
                message.channel.send("Vous n'avez pas mis de nom de catégorie, vous devez écrire `f!role addRole [nom de votre emote] [l'emote en question]`")
            }else {
                addRole();
            }
            break;
    
        default:
            const ErrorEmbed = new Discord.MessageEmbed() //Crée un embed
            .setColor('#FF0000') 
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
            .setTitle(`Liste des actions de cette commande.`)
            .addFields(
                {name: '`CREATE`', value: "`f!role create [le nom de votre catégorie]`"}
            )
            .setTimestamp()
            .setFooter('Mettez f!r ou f!role.')

        return message.channel.send(ErrorEmbed); //envoie l'embed
        break;
    }

        
}

exports.help = {
    name: "role",
    aliases: ['r']
}

exports.requirements = {
    botOwner: false,
    botPerms: [],
    userPerms: ['ADMINISTRATOR']
}