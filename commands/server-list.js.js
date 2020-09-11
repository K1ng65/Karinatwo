const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  message.channel.send({embed: {
  color: 3447003,
  title: `<:eta_preuga:748289174691512330> Obrigada por ter apoiado!!`,
  description: `${message.author} quer votar na [minha casa](https://discord.gg/gDARsRf) na discord Server List! \n  Que tal você votar também [clicando aqui](https://discordservers.me/servers/732630978807332959)<:logo_do_canal:747136377606635674> `
}});
console.log(`comando fox/server-list usado`);
}