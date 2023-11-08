const { client , interaction , ApplicationCommandOptionType, InteractionType, IntegrationApplication } = require('discord.js');

// 以下の形式にすることで、他のファイルでインポートして使用できるようになります。
module.exports = {
	/**
	 * 
	 * @param {client} client 
	 * @param {interaction} interaction 
	 */

	execute: async (client , interaction) => {
	const message = interaction.options.get("message")?.value || "何も入力されませんでした";
		await interaction.editReply({message})
	},
	name: "newtest",
	description: "a test commmands",
 	options:[ 
		{
		name: "message",
		description: "test2",
		type: ApplicationCommandOptionType.String,
		require: true
	}
	],
}

//	await interaction.reply('あなたが指定したのは'+ message +'です');