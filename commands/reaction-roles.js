module.exports = {
    name: "reaction-roles" ,
    description: "Gives you the role based on the reaction" ,
    async execute(message , args , Discord , client) {
        const channel = "792085551909568542";
        const carry =  message.guild.roles.cache.find(role => role.name === "Carry");
        const mid = message.guild.roles.cache.find(role => role.name === "Mid");
        const offlane = message.guild.roles.cache.find(role => role.name === "Offlane");

        const carry_emoji = "👊";
        const mid_emoji = "✊";
        const offlane_emoji = "💪";

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Choose the role you play!')
            .setDescription('Choose from these emoji for their corresponding position!\n\n'
                + `${carry_emoji} for position 1 (Carry)\n`
                + `${mid_emoji} for positions 2 (Mid)\n`
                + `${offlane_emoji} for position 3 (Offlane)`);
        
        if (message.channel.id === channel) {
            let messageEmbed = await message.channel.send(embed);
            messageEmbed.react(carry_emoji);
            messageEmbed.react(mid_emoji);
            messageEmbed.react(offlane_emoji);
        }

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === carry_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(carry);
                }
                if (reaction.emoji.name === mid_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(mid);
                }
                if (reaction.emoji.name === offlane_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(offlane);
                }
            } else {
                return;
            }
 
        });
        
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === carry_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(carry);
                }
                if (reaction.emoji.name === mid_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(mid);
                }
                if (reaction.emoji.name === offlane_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(offlane);
                }
            } else {
                return;
            }
        });
    }
}