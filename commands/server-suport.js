const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
message.channel.send({embed: {
  title: `meu servidor de suporte!!`,
  color: 3447003,
  description: `oi  ${message.author} entre no meu servidor de suporte na discord e saiba mais coisas sobre mim e etc!! \n \n https://discord.gg/KFDHcVH`,
  image: {
      url: `https://cdn.discordapp.com/attachments/753635920879812720/753830987024040007/l.PNG`
    }
}});
console.log(`comando fox/server-suport usado`);
message.delete().catch(O_o => {});
};