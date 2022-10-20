const { SlashCommandBuilder, GatewayIntentBits } = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client({ intents: [GatewayIntentBits.Guilds]});

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('지연율 확인'),
	async execute(interaction) {
        const bot = interaction.client;
        const botName = bot.user.username;
        const botIcon = bot.user.displayAvatarURL();

        const user = interaction.user;
        const userName = user.tag;
        const userIcon = user.avatarURL();

        const Embed = new Discord.EmbedBuilder()
            .setColor(0x5C7EBB)
            .setTitle('Pong')
            .setAuthor({ name: userName, iconURL: userIcon})
            .setDescription(`Pong!`)
            .setTimestamp()
            .setFooter({ text: botName, iconURL: botIcon})
        const mesg = await interaction.reply({ embeds: [Embed], fetchReply: true });
    },
};