# npp-bot (Discord Bot)

**npp-bot** is a discord bot for the discord server [Nodejs paired programming](https://discord.gg/MNhbFXV). The purpose of the bot is to provide new users on the server with resources (getting started tutorials, projects, important links, etc) for node and few frameworks, to get them started.

**Few of the bot's features are:**
* Issue commands (kick, ban, delete messages, etc)
* take polls
* chat
* reputation system



# Getting Started

* [create a bot](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot) 

* clone the repo
*  run the command *npm install* from the root directory of the project
* enter your bot's token number in config.ts (replacing the text *YOUR_TOKEN*)

# Prerequisites

[**Nodejs**](https://nodejs.org/en/download/) 

# Adding your bot to the servers


Follow the guide at this [link](https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links) to add your bot to the servers.

# Running the app

**In dev mode**
* run the command *npm run dev

**In production mode**
* run the command *npm run tsc* (to compile ts code to js)
* run the command *node ./dist/index*

