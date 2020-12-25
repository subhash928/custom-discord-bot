module.exports = {
    name: "reaction-roles" ,
    description: "Gives you the role based on the reaction" ,
    async execute(message , args , Discord , client) {
        const channel = "792085551909568542";
        const core_roles =  message.guild.roles.cache.find(role => role.name === "Carry");
        const support_roles = message.guild.roles.cache.find(role => role.name === "Mid");
        const flex_roles = message.guild.roles.cache.find(role => role.name === "Offlane");

        const core_roles_emoji = "👊";
        const support_roles_emoji = "👍";
        const flex_roles_emoji = "✌️";

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Choose the role you play!')
            .setDescription('Choose from these emoji for their corresponding roles!\n\n'
                + `${core_roles_emoji} for positions 1,2 and 3\n`
                + `${support_roles_emoji} for positions 4 and 5\n`
                + `${flex_roles_emoji} for flex role`);
        
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(core_roles_emoji);
        messageEmbed.react(support_roles_emoji);
        messageEmbed.react(flex_roles_emoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === core_roles_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(core_roles);
                }
                if (reaction.emoji.name === support_roles_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(support_roles);
                }
                if (reaction.emoji.name === flex_roles_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(flex_roles);
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
                if (reaction.emoji.name === core_roles_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(core_roles);
                }
                if (reaction.emoji.name === support_roles_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(support_roles);
                }
                if (reaction.emoji.name === flex_roles_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(flex_roles);
                }
            } else {
                return;
            }
        });
    }
}