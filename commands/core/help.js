const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h', 'yardım'],
    showHelp: false,
    utilisation: '{prefix}help',
    
    
    execute(client, message, args) {
        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setAuthor(client.user.username, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const commands = client.commands.filter(x => x.showHelp !== false);

        embed.setDescription('[CenterQuickMusic](https://www.youtube.com/channel/UCq7NsIPj_7DGwiKzeimi_mA)\nm?play ile müzik çal\nm?resume müzik dinlemeye devam et\nm?stop müziği durdur\nm?search youtube de ara\nm?save kayıt et\nm?nowplaying oynatılana bak');
        embed.addField(`Enabled - ${commands.size}`, commands.map(x => `\`${x.name}${x.aliases[0] ? ` (${x.aliases.map(y => y).join(', ')})\`` : '\`'}`).join(' | '));

        embed.setTimestamp();
        embed.setFooter('Mr. Thyphon', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
      
};


