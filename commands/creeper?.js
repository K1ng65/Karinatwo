const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

var list = [
  'ele tem tnt?',
  'CORRE!!!!!!!!!!!!!!!!!!!!!.',
  'pera! vou pegar minha espada de diamande aqui meu.',
  'a não vey, DE NOVO!!!!',
  'catapinbas ._.',
  'eu cuido disso!',
  'vou testar minha nova flexa nele!',
  'AAAAAHH!!!!!!!!!! E SO JOGAR UMA TNT NELE!!',
  'AWWW MEN!!!!!!!!!!!!!!!',
  'ja sei!... vou assar um bolo!',
  'mano :V',
  ':V'
];
var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);

message.channel.send(rand);
console.log(`comando f/creeper? usado`);
}