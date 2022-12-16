const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions, MessageManager, Embed, Collection, Events } = require(`discord.js`);
const fs = require('fs');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers] }); 

client.commands = new Collection();

require('dotenv').config();

const functions = fs.readdirSync("./src/functions").filter(file => file.endsWith(".js"));
const eventFiles = fs.readdirSync("./src/events").filter(file => file.endsWith(".js"));
const commandFolders = fs.readdirSync("./src/commands");

(async () => {
    for (file of functions) {
        require(`./functions/${file}`)(client);
    }
    client.handleEvents(eventFiles, "./src/events");
    client.handleCommands(commandFolders, "./src/commands");
    
    client.login(process.env.token)
})();

client.on('message', message=> {
    introID='808569965548535830';
    if(message.channel.id==introID) {
        const role='1052826975657537578';
        const getRole=member.guild.roles.cache.get(role);

        member.roles.remove(getRole);
    }
})

client.on(Events.GuildMemberAdd, member => {
    // Welcoming New Members
    const channelID='808775590990970880';
    const channel=member.guild.channels.cache.get(channelID)
    const message=`Welcome to the server ${member}!`;

    channel.send(message);

    // Auto Assigning Roles
    const role='1052826975657537578';
    const getRole=member.guild.roles.cache.get(role);

    member.roles.add(getRole);

    // Updating Member Count
    const voiceChannel=member.guild.channels.cache.get('809265691923578922');
    voiceChannel.setName(`Member Count: ${member.guild.memberCount.toLocaleString()}`);
})

client.on(Events.GuildMemberRemove, member => {
    // Updating Member Count
    const voiceChannel=member.guild.channels.cache.get('809265691923578922');
    voiceChannel.setName(`Member Count: ${member.guild.memberCount.toLocaleString()}`);
})