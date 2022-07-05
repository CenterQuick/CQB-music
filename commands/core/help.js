const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h', 'yardım'],
    showHelp: false,
    utilisation: '{prefix}help',
};

    const embed = new MessageEmbed();

    embed.setColor('RED');

    embed.setDescription('[CenterQuickMusic](https://www.youtube.com/channel/UCq7NsIPj_7DGwiKzeimi_mA)');
    embed.addField('play Bir parça oynatır.', inline: true );
    embed.addField('queue Sıraya bir parça ekler.', inline: true );
    embed.addField('pause Oynatılan parçayı durdurur.', inline: true );
    embed.addField('resume Durdurulan parçayı devam ettirir.', inline: true );
    embed.addField('skip Sonraki parçayı çalar.', inline: true );
    embed.addField('back Önceki parçayı çalar.', inline: true );
    embed.addField('volume Ses düzeyini ayarlar.', inline: true );
    embed.addField('save Parçayı kayıt eder.', inline: true );
    embed.addField('stop Parçayı durdurur.', inline: true );
    embed.addField('search Youtube araması yapar.', inline: true );
    embed.addField('nowplaying Çalmakta olan parçayı gösterir.', inline: true )

    embed.setFooter(`${message.author.username}` , message.author.avatarURL({ dynamic: true }));

    message.channel.send({ embeds: [embed] });
 
