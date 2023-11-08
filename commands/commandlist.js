const { SlashCommandBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('commandlist')
		.setDescription('コマンドリスト'),
	execute: async function(interaction) {
		await interaction.reply('commandlist')
		await interaction.send('test')
	},
}