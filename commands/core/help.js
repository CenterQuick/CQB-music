const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h', 'yardım'],
    showHelp: false,
    utilisation: '{prefix}help',
};

message.channel.send('`play` Bir parça oynatır.n\`queue` Sıraya bir parça ekler.n\
    `pause` Oynatılan parçayı durdurur.n\
    `resume` Durdurulan parçayı devam ettirir.n\
    `skip` Sonraki parçayı çalar.n\
    `back` Önceki parçayı çalar.n\
    `volume` Ses düzeyini ayarlar.n\
    `save` Parçayı kayıt eder.n\
    `stop` Parçayı durdurur.n\
    `search` Youtube araması yapar.n\
    `nowplaying` Çalmakta olan parçayı gösterir.n\
');
 
