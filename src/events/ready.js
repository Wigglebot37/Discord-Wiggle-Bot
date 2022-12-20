const { WelcomeChannel } = require('discord.js');

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log('Bot Online!');
        const activities=[
            'with fire',
            'the piano',
            'it cool',
            'Fireboy & Watergirl',
            'Outer Wilds',
            'Doom',
            'Portal 2',
            'Mother 3',
            'Project Everett',
            'My favorite OST'
        ];
        client.user.setPresence({ activities: [{ name: `My favorite OST`}]});

        setInterval(() => {
            const status=activities[Math.floor(Math.random()*activities.length)];
            client.user.setPresence({ activities: [{ name: `${status}`}]});
        }, 600000);
    },
};