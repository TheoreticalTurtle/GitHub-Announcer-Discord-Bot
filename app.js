const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
client.on('ready', () => {
	console.log('Bot is ready');
});
client.login(process.env.TOKEN)
client.on('messageCreate', (msg) => {
	if (msg.author.id === '948441496519077929') msg.reply('@everyone Git Repository for Pretty Chicken has been updated.');
	//console.log(msg.author.id);
});
