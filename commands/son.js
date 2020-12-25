module.exports = {
    name: 'son' ,
    description: "Responds only to dad",
    execute(msg,args) {
        if (msg.author.username != 'ZapiterX') msg.reply("You are not my father!");
        else msg.reply("Daddy?");
    }
}