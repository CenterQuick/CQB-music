module.exports = {
    name: 'back',
    aliases: ['previous', 'geri'],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Bir parça oynatılmıyor.${message.author}... ❌`);

        if (!queue.previousTracks[1]) return message.channel.send(`Daha önce bir parça oynatılmamış ${message.author}... ❌`);

        await queue.back();

        message.channel.send(`Önceki şarkı oynatılıyor. ✅`);
    },
};