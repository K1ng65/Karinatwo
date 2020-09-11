const Discord = require("discord.js");

exports.run = async (client, message, args) => {
message.delete();
const content = args.join(" ");

if (!args[0]) {
  return message.channel.send(`${message.author.username}, escreva a sugestão após o comando`)
} else if (content.length > 1000) {
  return message.channel.send(`${message.author.username}, forneça uma sugestão de no máximo 1000 caracteres.`);
} else {
  const hook = new Discord.WebhookClient('753628219604729986', 'M86WnjXVdvh7SfAv2CMs0E1VB6pscAvuar-PNZDvwDLZYxTEg8Kfpr_jW5lSym9d4Ttp');
  hook.send(
    new Discord.MessageEmbed()
    .setColor("#FFFFF1")
    .addField("Autor:", message.author)
    .addField("Conteúdo", content)
    .setFooter(`suporte por: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))
  );
  await message.channel.send({embed: {
  color: 3547013,
  description: `${message.author} seu suporte foi \n enviado com suseso!`
}}).then(msg => msg.delete({ timeout: 5000 }))

  
}
}