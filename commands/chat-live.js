const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply({embed: {
  color: 3446103,
  description: 'não encontrei um usuario valido para criar a sala de pate papo retro \n \n mercione um usuario valido'
}});
}

  message.channel.send({embed: {
  color: 3447003,
  description: `criei uma sala de texto para ${message.author} e ${user} baterem um papo no estilo retro \n \n assese este link abaixo para entrar na sala \n https://karinachatlive.zelferry.repl.co/`
}}); 
message.delete().catch(O_o => {});
console.log(`comando fox/convidar usado`);
}