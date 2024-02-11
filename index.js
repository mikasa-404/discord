const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const token = process.env.DISCORD_TOKEN;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
    if(message.author.bot) return;
    message.reply("Heyyyyy! I am Priya's baby bot")
});

client.on("interactionCreate", interaction=>{
    console.log(interaction);

    interaction.reply("Pong!")
})
client.login(token);
