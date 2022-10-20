const { SlashCommandBuilder, GatewayIntentBits } = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client({ intents: [GatewayIntentBits.Guilds]});
const config = require("../config/config.json");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('invite')
		.setDescription('봇 초대 링크'),
	async execute(interaction) {
        const bot = interaction.client;
        const botName = bot.user.username;
        const botIcon = bot.user.displayAvatarURL();

        const user = interaction.user;
        const userName = user.tag;
        const userIcon = user.avatarURL();

        const Embed = new Discord.EmbedBuilder()
            .setColor(0x5C7EBB)
            .setTitle('봇 초대 링크')
            .setURL('https://discord.com/api/oauth2/authorize?client_id=' + config.clientid + '&permissions=8&scope=bot%20applications.commands')
            .setAuthor({ name: userName, iconURL: userIcon})
            .setDescription(`${ botName }의 초대 링크입니다. 클릭하여 봇을 초대해 보세요!`)
            .setTimestamp()
            .setFooter({ text: botName, iconURL: botIcon})
        const mesg = await interaction.reply({ embeds: [Embed], fetchReply: true });
    },
};