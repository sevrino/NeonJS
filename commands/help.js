const { SlashCommandBuilder, GatewayIntentBits } = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client({ intents: [GatewayIntentBits.Guilds]});
const config = require("../config/config.json");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('봇 명령어 안내'),
	async execute(interaction) {
        const bot = interaction.client;
        const botName = bot.user.username;
        const botIcon = bot.user.displayAvatarURL();

        const user = interaction.user;
        const userName = user.tag;
        const userIcon = user.avatarURL();

        const Embed = new Discord.EmbedBuilder()
            .setColor(0x5C7EBB)
            .setTitle('명령어 안내')
            .setAuthor({ name: userName, iconURL: userIcon})
            .setDescription('명령어 소개입니다.')
            .addFields(
                { name: 'help', value: '봇 명령어를 안내합니다.' },
                { name: 'invite', value: '봇 초대링크를 전송합니다.' },
                { name: 'ping', value: '봇의 지연율을 확인합니다.' },

            )
            .setTimestamp()
            .setFooter({ text: botName, iconURL: botIcon})
        const mesg = await interaction.reply({ embeds: [Embed], fetchReply: true });
    },
};