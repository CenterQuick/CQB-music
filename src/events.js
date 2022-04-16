player.on('error', (queue, error) => {
    console.log(`Bir hata var!!! ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Kanala bağlanamıyorum ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    queue.metadata.send(`Bu şarkı ${track.title}  **${queue.connection.channel.name}** kanalında oynatılıyor. 🎧`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`${track.title} Sıraya eklendi ✅`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('Bağlantı kesildi. Playlist temizleniyor... ❌');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('Hey! Kimse müzik dinlemiyor. Kanaldan bağlantımı kestim... ❌');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('Playlist bitti. Yeni şarkı eklemeye ne dersin? ✅');
});