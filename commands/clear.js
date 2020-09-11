const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply(
      "🚫|sem permisão, requer um cargo com a funsão  `GERENSIAR MENSAGENS` ativano para usar esse comando."
    );
  const deleteCount = parseInt(args[0], 10);
  if (!deleteCount || deleteCount < 1 || deleteCount > 99)
    return message.reply(
      "forneça um número de até **99 mensagens** a serem excluídas"
    );

  const fetched = await message.channel.messages.fetch({
    limit: deleteCount + 1
  });
  message.channel.bulkDelete(fetched);
  message.channel
    .send(`**${args[0]} mensagens limpas nesse chat!**`).then(msg => msg.delete({ timeout: 5000 }))
    .catch(error =>
      console.log(`DEU ERRO!!!, devido a: ${error}`)
    );
  console.log(`comando fox/clear usado`);
};