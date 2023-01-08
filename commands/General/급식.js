const userbot = user.user.bot ? "BOT" : "USER";
const date = new Date()
const times = Math.round(date.getTime() / 1000)
client.on('guildMemberAdd', member =>{
    const embed = new MessageEmbed()
        .setTitle(`HELLO WORLD!`)
        .setDescription(`<@!${member.user.id}> 님이 입장하셨어요!`)
        .addField('서버 가입일', `<t:${times}:F>`)
        .addField('계정 유형', `${isBot}`)
        .setTimestamp()
    client.channels.cache.get('1048883208831369259').send({ embeds: [embed] })
})