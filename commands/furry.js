const Discord = require("discord.js")
const muttubus = require("../database/imagens/muttubus.json");

module.exports.run = async (client, message, args) => {
  await message.delete();
  var rand89 = muttubus[Math.floor(Math.random() * muttubus.length)];

  const embed = await new Discord.MessageEmbed()
    .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
    .setTitle("UwU")
    .setImage(rand89)
    .setColor("da61ff")
    .setTimestamp()
    .setFooter(`User ID: ${message.author.id}`)
  message.channel.send(embed)
  console.log('f/furry usado')
};
