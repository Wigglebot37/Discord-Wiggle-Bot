const { Client, GatewayIntentBits, Partials, EmbedBuilder, PermissionsBitField, Permissions, MessageManager, Embed, Collection, Events, userMention } = require(`discord.js`);
const fs = require('fs');
const client = new Client({ 
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildEmojisAndStickers],
    partials: [Partials.Message, Partials.Channel, Partials.Reaction]
});

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

const botchan='808569558067576875';
const reactchan='809237921970126868';
const reactmes='1053818864087072919';
const reactmes2='1053823458225705012';

// Roles
const redrole='851688462897250314';
const hotpinkrole='851688381111861258';
const rosepinkrole='851688266787979275';
const lightorangerole='851687979398725652';
const orangerole='851688130225373184';
const yellowrole='851685519808659473';
const mintrole='851687580822011934';
const greenrole='851687896317427722';
const bluerole='851685860008525826';
const purplerole='884887071540514876';
const newsrole='851704346118848522';
const partyrole='851998621687218196';

// Emoji
const newsEmoji='📰';
const congratsEmoji='🥳';

client.on(Events.MessageCreate, message => {
    introID='808569965548535830';
    if(message.channelId===introID) {
        const role='1052826975657537578';
        const getRole=message.member.guild.roles.cache.get(role);

        message.member.roles.add(getRole);
    }
})

client.on(Events.GuildMemberAdd, member => {
    // Welcoming New Members
    const channelID='808775590990970880';
    const channel=member.guild.channels.cache.get(channelID);
    const message=`Welcome to the server ${member}!`;

    channel.send(message);

    // Auto Assigning Roles
    const role='808778193162207262';
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

client.on(Events.MessageReactionAdd, (reaction,user) => {
    if(reaction.partial) reaction.fetch();
    if(user.bot) return;
    const red=reaction.message.guild.roles.cache.get(redrole);
    const hotpink=reaction.message.guild.roles.cache.get(hotpinkrole);
	const rosepink=reaction.message.guild.roles.cache.get(rosepinkrole);
	const lightorange=reaction.message.guild.roles.cache.get(lightorangerole);
	const orange=reaction.message.guild.roles.cache.get(orangerole);
	const yellow=reaction.message.guild.roles.cache.get(yellowrole);
	const mint=reaction.message.guild.roles.cache.get(mintrole);
	const green=reaction.message.guild.roles.cache.get(greenrole);
	const blue=reaction.message.guild.roles.cache.get(bluerole);
	const purple=reaction.message.guild.roles.cache.get(purplerole);
	const news=reaction.message.guild.roles.cache.get(newsrole);
	const party=reaction.message.guild.roles.cache.get(partyrole);

    if(reaction.message.channelId==reactchan) {
        var role=null;
        if(reaction.message==reactmes) {
            switch(reaction.emoji.name) {
                case 'red': role=red; break;
                case 'hotpink': role=hotpink; break;
                case 'rosepink': role=rosepink; break;
                case 'orange': role=orange; break;
                case 'lightorange': role=lightorange; break;
                case 'yellow': role=yellow; break;
                case 'mint': role=mint; break;
                case 'green': role=green; break;
                case 'blue': role=blue; break;
                case 'purple': role=purple; break;
            }
        }
        if(reaction.message==reactmes2) {
            if(reaction.emoji.name==newsEmoji) role=news;
            else if(reaction.emoji.name==congratsEmoji) role=party;
        }
        if(role!=null) {
            reaction.message.guild.members.cache.get(user.id).roles.add(role);

            const botchannel=reaction.message.guild.channels.cache.get(botchan);
            const msg=`${user} ^`;
            const embed=new EmbedBuilder()
            .setColor('#fff176')
            .setTitle(`Role Added`)
            .setDescription(`${user} now has the following role: ${role}`);
    
            botchannel.send({ embeds: [embed] });
            //botchannel.send(msg);
        } else return;
    }
});

client.on(Events.MessageReactionRemove, async(reaction,user) => {
    if(reaction.partial) reaction.fetch();
    if(user.bot) return;
    const red=reaction.message.guild.roles.cache.get(redrole);
    const hotpink=reaction.message.guild.roles.cache.get(hotpinkrole);
	const rosepink=reaction.message.guild.roles.cache.get(rosepinkrole);
	const lightorange=reaction.message.guild.roles.cache.get(lightorangerole);
	const orange=reaction.message.guild.roles.cache.get(orangerole);
	const yellow=reaction.message.guild.roles.cache.get(yellowrole);
	const mint=reaction.message.guild.roles.cache.get(mintrole);
	const green=reaction.message.guild.roles.cache.get(greenrole);
	const blue=reaction.message.guild.roles.cache.get(bluerole);
	const purple=reaction.message.guild.roles.cache.get(purplerole);
	const news=reaction.message.guild.roles.cache.get(newsrole);
	const party=reaction.message.guild.roles.cache.get(partyrole);

    if(reaction.message.channelId==reactchan) {
        var role=null;
        if(reaction.message==reactmes) {
            switch(reaction.emoji.name) {
                case 'red': role=red; break;
                case 'hotpink': role=hotpink; break;
                case 'rosepink': role=rosepink; break;
                case 'orange': role=orange; break;
                case 'lightorange': role=lightorange; break;
                case 'yellow': role=yellow; break;
                case 'mint': role=mint; break;
                case 'green': role=green; break;
                case 'blue': role=blue; break;
                case 'purple': role=purple; break;
            }
        }
        if(reaction.message==reactmes2) {
            if(reaction.emoji.name==newsEmoji) role=news;
            else if(reaction.emoji.name==congratsEmoji) role=party;
        }
        if(role!=null) {
            reaction.message.guild.members.cache.get(user.id).roles.remove(role);

            const botchannel=reaction.message.guild.channels.cache.get(botchan);
            const msg=`${user} ^`;
            const embed=new EmbedBuilder()
            .setColor('#fff176')
            .setTitle(`Role Removed`)
            .setDescription(`${user} no longer has the following role: ${role}`);
    
            botchannel.send({ embeds: [embed] });
            //botchannel.send(msg);
        } else return;
    }
});