const { SlashCommandBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
      .setname("testv2")
      .setDescription("指定できるやつ作りたい"),
      options: [{
          type: "STRING",
          name: "koroは？",
          description: "あなたの意見を選んでください",
          required: true,
          choices: [
              { name: "おいしい", value: "おいしい" },
              { name: "おいしくない", value: "おいしくない" },
          ]
      }],
  },
    async function(interaction) {
        interaction.reply('あなたが指定したのは'+ message +'です');
      }
