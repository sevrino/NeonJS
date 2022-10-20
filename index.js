const fs = require('node:fs');
const path = require('node:path');
const { Client, Events, GatewayIntentBits } = require('discord.js');
const Discord = require("discord.js");
const config = require("./config/config.json");

const client = new Discord.Client({ intents: [GatewayIntentBits.Guilds]});

client.commands = new Discord.Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}

client.once(Events.ClientReady, c => {
    client.user.setPresence({ activities: [{ name: config.ver }], status: 'online' });
    console.log(`${c.user.tag} 준비됨.`);
});

client.on(Events.InteractionCreate, async interaction => {
	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
            const Embed = new Discord.EmbedBuilder()
            .setColor(0x5C7EBB)
            .setURL(config.devGuild)
            .setTitle('오류가 발생하였습니다.')
            .setDescription(`디버깅을 위해 자세한 상황을 개발서버에 알려주세요!`)
            .setTimestamp()
        await interaction.reply({ embeds: [Embed]});
	}
});

client.login(config.token);