const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on("ready", () => {
  console.log(`${client.user.username} Ready to be in qovery`);
  client.user.setActivity("prefix: .");
});

client.on("error", console.error);

client.on("message", () => {
  if(message.content === prefix + "ping") {
    message.reply("pong");
  }
});


// Login to Discord with your client's token
client.login(token);
