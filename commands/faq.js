module.exports = {
    name: "faq" ,
    description : "faq random user" ,
    execute (msg , args) {
        let user = msg.guild.members.cache.random();
        msg.channel.send(`Hey ${user.user}, Fuck You!`);
    }
}