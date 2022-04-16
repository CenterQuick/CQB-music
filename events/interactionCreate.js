module.exports = (client, int) => {
    if (!int.isButton()) return;

    const queue = player.getQueue(int.guildId);

    switch (int.customId) {
        case 'saveTrack': {
            if (!queue || !queue.playing) return int.reply({ content: `Şu anda bir şarkı oynatılmıyor. ❌`, ephemeral: true, components: [] });

            int.member.send(`Parçan kayıt edildi ${queue.current.title} | ${queue.current.author} Sunucusunda ${int.member.guild.name} ✅`).then(() => {
                return int.reply({ content: `Şarkı ismi dm kutunda ✅`, ephemeral: true, components: [] });
            }).catch(error => {
                return int.reply({ content: `Sana özel mesaj gönderemiyorum. ❌`, ephemeral: true, components: [] });
            });
        }
    }
};