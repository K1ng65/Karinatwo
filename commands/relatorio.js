const Discord = require("discord.js");

exports.run = async (client, message, args) => {
message.delete();
const content = args.join(" ");

if (!args[0]) {
  return message.channel.send(`${message.author.username}, escreva o relatorio após o comando`)
} else if (content.length > 1000) {
  return message.channel.send(`${message.author.username}, forneça um relatorio de no máximo 1000 caracteres.`);
} else {
  const hook = new Discord.WebhookClient('793854991243804744','EkkzNb-kY_pg2fCk1HECDHp7ny-qX5GN2hllYH6VkEDKNbKfPpQP-dNIiyAtrjukM9mw');
  hook.send(
    new Discord.MessageEmbed()
    .setColor("#FFFFF1")
    .addField("Autor:", message.author)
    .addField("Conteúdo", content)
    .setFooter(`suporte por: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))
  );
  await message.channel.send({embed: {
  color: 3547013,
  description: `${message.author} relatorio enviado com suseso no meu servidor de suporte!`
}}).then(msg => msg.delete({ timeout: 5000 }))

  
}
}