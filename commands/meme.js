const Discord = require("discord.js")

exports.run = async (client, message, args) => {
var list = [
  'https://cdn.discordapp.com/attachments/747952781704560660/748686999086694430/APROVADO.mp4',
  'https://cdn.discordapp.com/attachments/747952781704560660/748687124064239706/REPROVADO.mp4'

];
var rand = list[Math.floor(Math.random() * list.length)];

message.channel.send(rand)

console.log(`comando fox/meme usado`);
}