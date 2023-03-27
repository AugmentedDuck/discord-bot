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

client.login(process.env.BOT_TOKEN);

client.once(Events.ClientReady, onReady);

function onReady(c) {
  console.log(`Ready! Logged in as ${c.user.tag}`);
};

client.on(Events.MessageCreate, onMessage);

function onMessage(msg){
  if(msg.content.includes('!ask')){
    const answers = ["No", "Maybe", "Yes", "Definetly", "Probably", "Definetly not", "Probably not"]
    let answer = answers[Math.floor(Math.random() * answers.length)]
    msg.reply(answer)
    console.log(answer + " : " + Math.floor(Math.random() * answers.length))
  }
}