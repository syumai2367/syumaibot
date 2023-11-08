const { REST, Routes } = require('discord.js');
// hey.jsのmodule.exportsを呼び出します。
const commandlistFile = require('./commands/commandlist.js')
const newtestFile =require('./commands/newtest.js')
const testFile = require('./commands/test.js');
const command1 = [newtestFile,testFile.data.toJSON(),commandlistFile.data.toJSON()];
// 環境変数としてapplicationId, guildId, tokenの3つが必要です
const { applicationId, guildId, token } = require('./config.json');
const rest = new REST({ version: '10' }).setToken(token);
// Discordサーバーにコマンドを登録
(async () => {
    try {
        await rest.put(
			Routes.applicationGuildCommands(applicationId, guildId),
			{ body: command1 },
		);
        console.log('登録されました！');
    } catch (error) {
        console.error('登録中にエラーが発生しました:', error);
    }
})();
