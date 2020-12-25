const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client();
const prefix = "-";
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready' , () => {
    console.log("Relaxing-bot is back baby!");
})

client.on('message', msg => {
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;

    const args = msg.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'avatar') {
        client.commands.get('avatar').execute(msg,args);
    }
    
    
    if (command === 'son?') {
        client.commands.get('son').execute(msg,args);
    }

    if (command === 'faq') client.commands.get('faq').execute(msg,args);

    let user = msg.guild.members.random();

  });


client.login(process.env.client_token);
