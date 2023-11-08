 
 // discord.jsライブラリの中から必要な設定を呼び出し、変数に保存します
const { Client, Events, GatewayIntentBits } = require('discord.js');
const commandlistFile = require('./commands/commandlist.js')
const newtestFile = require('./commands/newtest.js')
const testFile = require('./commands/test.js');
// 設定ファイルからトークン情報を呼び出し、変数に保存します
const { webhook } = require('./config.json')
const { token } = require('./config.json')
const { guildId } = require('./config.json');
const test = require('./commands/test.js');
// クライアントインスタンスと呼ばれるオブジェクトを作成します
const client = new Client({
	intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent]
})
//===========================================================================
//入退出通知
client.on("guildMemberAdd", member => {
    if (member.guild.id !== "{ guildId }") return; // 指定のサーバー以外では動作しないようにする
    member.guild.channels.cache.get("送信するチャンネルId")
    message.channel.send('> **welcome!!**\r> ${member.user}が参加しました！\r\r> ');
});

client.on("guildMemberRemove", member => {
    if (member.guild.id !== "{ guildId }") return; // 指定のサーバー以外では動作しないようにする
    member.guild.channels.cache.get("送信するチャンネルId")
    message.channel.send(`${member.user.tag}が退出しました。`);
});
//暴言検知です
client.on('messageCreate', message => {
    if (message.author.bot) {
        return;
    }
    if (message.content == 'テスト募集' ) {
        message.guild.roles.fetch('1170282939498643470')
        .then(role => message.channel.send(`テストです ${role}`))
    }
    if (message.content == 'あほ' ) {
        message.delete();
        message.channel.send('暴言を検知したため削除しました');
    }
    if (message.content == 'しね') {
        message.delete();
        message.channel.send('暴言を検知したため削除しました');
    }
    if (message.content == '死ね') {
        message.delete();
        message.channel.send('暴言を検知したため削除しました');
    }
    if (message.content == 'クズ') {
        message.delete();
        message.channel.send('暴言を検知したため削除しました');
    }
    if (message.content == 'ばか') {
        message.delete();
        message.channel.send('暴言を検知したため削除しました');
    }
    if (message.content == 'あほぉ‼️') {
        message.delete();
        message.channel.send('暴言を検知したため削除しました');
    }
    if (message.content == 'しゃべんな') {
        message.delete();
        message.channel.send('暴言を検知したため削除しました');
    }
    if (message.content == 'クズ') {
        message.delete();
        message.channel.send('暴言を検知したため削除しました');
    }
    if (message.content == '雑魚') {
        message.delete();
        message.channel.send('暴言を検知したため削除しました');
    }
    if (message.content == 'はげ') {
        message.delete();
        message.channel.send('暴言を検知したため削除しました');
    }
    if (message.content == '黒人') {
        message.delete();
        message.channel.send('暴言を検知したため削除しました');
    }
    if (message.content == 'ばか') {
        message.delete();
        message.channel.send('暴言を検知したため削除しました');
    }
    if (message.content == 'ごみ') {
        message.delete();
        message.channel.send('暴言を検知したため削除しました');
    }
    if (message.content == 'どぶ') {
        message.delete();
        message.channel.send('暴言を検知したため削除しました');
    }
    if (message.content == '生きる価値ない') {
        message.delete();
        message.channel.send('暴言を検知したため削除しました');
    }
    if (message.content == 'ぶた') {
        message.delete();
        message.channel.send('暴言を検知したため削除しました');
    }
    if (message.content == '豚') {
        message.delete();
        message.channel.send('暴言を検知したため削除しました');
    }
});

//スラッシュコマンドに応答するには、interactionCreateのイベントリスナーを使う必要があります
//client.on(Events.InteractionCreate, async interaction => {
//    if (!interaction.isChatInputCommand()) return;
//    if (interaction.commandName === comm) {
//        try {
//            await command1.execute(interaction);
//        } catch (error) {
//            console.error(error);
//            if (interaction.replied || interaction.deferred) {
//                await interaction.followUp({ content: 'コマンド実行時にエラーになりました。', ephemeral: true });
//            } else {
//                await interaction.reply({ content: 'コマンド実行時にエラーになりました。', ephemeral: true });
//            }
//        }
//    } else {
//          console.error(`${interaction.commandName}というコマンドには対応していません。`);
//            }
//});

client.on("interactionCreate", async (interaction) => { // 1
    if (!interaction.isCommand()) { // 2
      return;
    }
    if (interaction.commandName === 'commandlist') { // 3
        await interaction.reply('**コマンド一覧**```\r/test   テスト用に作られたコマンドです\r/commandlist   使えるコマンド一覧を表示します```'); // 4
    }
    if (interaction.commandName === 'newtest') { // 3
        await newtestFile.execute("interaction"); // 4
    }
    if (interaction.commandName === 'test') { // 3
        await interaction.reply('テストーーー');
        }});
client.once(Events.ClientReady, c => {
	console.log(`準備OKです! ${c.user.tag}がログインします。`);
});
client.login(token,webhook);



