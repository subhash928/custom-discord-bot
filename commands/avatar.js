module.exports = {
    name: 'avatar',
    description: "Replies user with their avatar url" ,
    execute(msg , args) {
        var mention = msg.mentions.users.first();
        if(!mention) msg.channel.send(msg.author.displayAvatarURL());
        else msg.channel.send(mention.displayAvatarURL());
    }
}