// require the dotENV
const dotENV = require('dotenv').config();
// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
    console.log('Ready!');
});

// login to Discord with your app's token
client.login(process.env.DISCORD_TOKEN);