const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h', 'yardım'],
    showHelp: false,
    utilisation: '{prefix}help',

    execute(client, message, args) {
        const embed = new MessageEmbed();

        embed.setColor('RED');

        embed.setDescription('[CenterQuickMusic](https://www.youtube.com/channel/UCq7NsIPj_7DGwiKzeimi_mA)');
        embed.addField('play Bir parça oynatır.');
        embed.addField('queue Sıraya bir parça ekler.');
        embed.addField('pause Oynatılan parçayı durdurur.');
        embed.addField('resume Durdurulan parçayı devam ettirir.');
        embed.addField('skip Sonraki parçayı çalar.');
        embed.addField('back Önceki parçayı çalar.');
        embed.addField('volume Ses düzeyini ayarlar.');
        embed.addField('save Parçayı kayıt eder.');
        embed.addField('stop Parçayı durdurur.');
        embed.addField('search Youtube araması yapar.');
        embed.addField('nowplaying Çalmakta olan parçayı gösterir.')

        embed.setFooter(`${message.author.username}` , message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};
