const Discord = require("discord.js");
const canvacord = require("canvacord");

module.exports.run = async (client, message, args) => {
  if (!args[0]) return message.reply('Você precisa inserir o texto!');
  const avatar = args.join(' ');
  
  let image = await canvacord.Canvas.changemymind(avatar);
  let attachment = new Discord.MessageAttachment(image, "changemymind.png");
  return message.channel.send(attachment);
}