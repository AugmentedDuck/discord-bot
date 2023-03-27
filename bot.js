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

function onMessage(message){
  if(message.author.bot) {
    return;
  }

  command = message.content.substring(message.content.indexOf("!"));

  if(command.startsWith('!ask')){
    const answers = ["No", "Maybe", "Yes", "Definetly", "Probably", "Definetly not", "Probably not"]

    let answer = answers[Math.floor(Math.random() * answers.length)]

    message.reply(answer)
  } else if (command.startsWith('!roll')){
    arguments = command.split(' ');
    arguments.shift();

    const answers = ["https://tenor.com/view/no-score-judging-zero-gif-13779921", //0
                     "https://tenor.com/view/spongebob-rip-he-was-number1-tim-conway-barnacle-boy-gif-12979293", //1
                     "https://tenor.com/view/happy-birthday-cake-two-blow-gif-14756452", //2
                     "https://tenor.com/view/3take-it-or-leave-it-three-take-it-or-leave-it-sbs-patrick-gif-15037514", //3
                     "https://tenor.com/view/bfb-four-bfbfour-bfdi-gif-19221411", //4
                     "https://tenor.com/view/how-i-met-your-mother-barney-stinson-neil-patrick-harris-high-five-almighty-five-gif-3684702", //5
                     "https://tenor.com/view/lets-talk-about-six-baby-jurgen-kloop-liverpool-6times-liverpool-managers-gif-14290157", //6
                     "https://tenor.com/view/joey-friends-counting-i-said-seven-6fingers-gif-17378375", //7
                     "https://tenor.com/view/wow-omg-surprised-scared-kid-gif-15526979", //8
                     "https://tenor.com/view/judge-youre-a-nine-nine-score-gif-10302784", //9
                     "https://tenor.com/view/perfect-10-perfect10-perfection-congratulations-gif-16358879"] //10

    let answer;

    if(arguments.length > 2 || arguments.length < 1 || arguments == null) {
      message.reply("Wrong Arguments: !roll [MINIMUM] [MAXIMUM]");
      return;
    } else if (arguments.length == 2){
      answer = Math.floor(Math.random() * (arguments[1] - arguments[0] + 1) + arguments[0]);
    } else {
      answer = Math.round(Math.random() * arguments[0]);
      console.log("answer: " + answer + " from: " + arguments[0])
    }
    
    if((answer >= 0 && answer <= 10)) {
      message.reply(answers[answer])
    } else if (answer == null) {
      console.error('NO ANSWER PROVIDED' + answer);
      return;
    } else {
      message.reply("You rolled: " + answer)
    }
  }
}