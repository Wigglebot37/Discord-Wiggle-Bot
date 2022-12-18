const { SlashCommandBuilder } = require('@discordjs/builders');
const { PermissionsBitField, EmbedBuilder } = require(`discord.js`);

module.exports = {
    data:new SlashCommandBuilder()
    .setName('reactrole')
    .setDescription('Sets up reaction role message.')
    .addChannelOption(option => option.setName(`reactchan`).setDescription(`This is the channel you want the message in.`).setRequired(true)),
    async execute(interaction, client) {
        if(!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return await interaction.reply({
            content: "You need admin privileges to use this command.", ephemeral: true
        });
        const reactChan=interaction.options.getChannel(`reactchan`);

        const red='<:red:851696303846719499>';
        const hotpink='<:hotpink:851696304102047775>';
        const rosepink='<:rosepink:851696304144252958>';
        const lightorange='<:lightorange:851696304170336256>';
        const orange='<:orange:851696304085532712>';
        const yellow='<:yellow:851690551236624404>';
        const mint='<:mint:851696303897182250>';
        const green='<:green:851696304094052382>';
        const blue='<:blue:851696304233119765>';
        const purple='<:purple:851696303847243787>';
        const newsEmoji='📰';
        const congratsEmoji='🥳';
            
        const embed=new EmbedBuilder()
        .setColor('#fff176')
        .setTitle('Additional Roles')
        .setDescription('Below are some extra roles.\n\n'
        + `${newsEmoji} for those who want to be notified more often on Project Everett news.\n`
        + `${congratsEmoji} for those who want to occasionally throw a party.`);
 
        const messageEmbed = await reactChan.send({ embeds: [embed] });
        messageEmbed.react(newsEmoji)
        .then(() => messageEmbed.react(congratsEmoji))
        /*messageEmbed.react(red)
        .then(() => messageEmbed.react(hotpink))
        .then(() => messageEmbed.react(rosepink))
        .then(() => messageEmbed.react(orange))
        .then(() => messageEmbed.react(lightorange))
        .then(() => messageEmbed.react(yellow))
        .then(() => messageEmbed.react(mint))
        .then(() => messageEmbed.react(green))
        .then(() => messageEmbed.react(blue))
        .then(() => messageEmbed.react(purple))*/
			.catch(error => console.error('One of the emojis failed to react:', error));
    }
}