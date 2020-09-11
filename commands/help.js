const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  message.channel.send({embed: {
    color: 13893887,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "presisa de ajuda e de suporte, então...",
    description: "fui criada pelo [__zeferry__](https://www.youtube.com/channel/UC4CgPExGInOXTLUsZdda7ew?view_as=subscriber) para deixar seu servidor mais ativo como nunca!!, mais e claro meus comandos  são muito difíceis de memorizar :p abaixo esta meu site para ver meus comandos",
    fields: [{
        name: "🤔|assese meu site e veja meus comandos!",
        value: "[clique aqui para asesar meu site](https://zelferrybrburryofi.wixsite.com/karinabot/comandos)"
      },
      {
        name: "💾| quer da dicas de comandos? fale com o zelfery no telegram!",
        value: "[clique aqui para entrar em suporte.](https://t.me/Zelferry)\n"
      },
      {
        name: "se presisar novamente...",
        value: "dijite fox/help para saber dos meus comandos novamente"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "©karina BOT todos os direitos resevardos"
    }
  }
});
message.delete().catch(O_o => {});
console.log(`um usuario pediu ajuda`);
}