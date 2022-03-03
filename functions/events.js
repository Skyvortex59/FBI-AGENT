const { readdirSync } = require("fs");
const { join } = require("path");
const eventDir = join(__dirname, "..", "events");

module.exports.run = (bot) => {
    const eventFiles = readdirSync(eventDir);

    for(const eventFile of eventFiles) {
        const event = require(`${eventDir}/${eventFile}`);
        const eventName = eventFile.split(".").shift();
        bot.on(eventName, (...args) => event.execute(...args));
        delete require.cache[require.resolve(`${eventDir}/${eventFile}`)];
    }
    bot.events = eventFiles.length;
    console.log(`Loaded ${eventFiles.length} events !`);
    console.log("")
    eventFiles.forEach((e, i) => {
        console.log(`${i + 1}: ${e} Loaded`);
    })
}
