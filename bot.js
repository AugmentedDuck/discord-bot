require("dotenv").config();

const { Client, Events, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildMessages,
  ],
  partials: ['MESSAGE', 'CHANNEL']
});

client.login(client.login(process.env.NØGLE_NAVN));

client.once(Events.ClientReady, onReady);

function onReady(c) {
  console.log(`Ready! Logged in as ${c.user.tag}`);
};

client.on(Events.MessageCreate, onMessage);

function onMessage(msg){
  if(msg.content.includes('hej')){
    msg.reply('hej')
  }
  console.log(msg);

}