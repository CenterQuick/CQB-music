const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h', 'yardım'],
    showHelp: false,
    utilisation: '{prefix}help',
};

message.channel.send("""
    play Bir parça oynatır.
    queue Sıraya bir parça ekler.
    pause Oynatılan parçayı durdurur.
    resume Durdurulan parçayı devam ettirir.
    skip Sonraki parçayı çalar.
    back Önceki parçayı çalar.
    volume Ses düzeyini ayarlar.
    save Parçayı kayıt eder.
    stop Parçayı durdurur.
    search Youtube araması yapar.
    nowplaying Çalmakta olan parçayı gösterir.
""");
 
