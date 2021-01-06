const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    let db = require('megadb')

    let PrefixDB = new db.crearDB("Prefix");

    if (!PrefixDB.tiene(`${message.guild.id}`))
    PrefixDB.establecer(`${message.guild.id}`, {
      name: message.guild.name,
      owner: message.guild.owner.user.id,
      prefix: "f/"
    });

    let prefixoAtual = await PrefixDB.obtener(`${message.guild.id}.prefix`);


const embed = {
  "title": "Minha lista de comandos!",
  "description": "Meu prefixo nesse servidor: `"+prefixoAtual+"`",
  "color": 11993343,
  "fields": [
    {
      "name": "😹》diversão",
      "value": "`coin`,`kiss`,`say`,`avatar`,`atack`,`ping`,`slap`,`emoji`,`inverter`,`idiot`,`qi`,`dancar`,`dino`,`hug`,`morse`"
    },
    {
      "name": "📷》fotoshop",
      "value": "`triggered`,`affect`,`beautiful`,`changemymind`,`invert`,`fuse`"
    },
    {
      "name": "👮》administração",
      "value": "`anunciar`,`banlist`,`clear`,`create-rules`,`setprefix`,`locklink`"
    },
    {
      "name": "📲》discord",
      "value": "`convidar`,`karinainfor`"
    },
    {
      "name": "💎》minecraft",
      "value": "`CREEPER?`"
    },
    {
      "name": "💩》memes",
      "value": "`meme`,`gerarmeme`"
    },
    {
      "name": "💳》econômica",
      "value": "`furcoins`,`daily`,`work`,`roll`,`vip`,`pay`,`buy`,`open`"
    },
    {
      "name": "↪》miscelânea",
      "value": "`karina-oc`,`lembrete`,`pitaya`,`furry`"
    },
    {
      "name": "😈》nsfw",
      "value": "`nsfw`,`gay`"
    }
  ]
};
message.channel.send({ embed });
  
message.delete().catch(O_o => {});
console.log(`um usuario pediu ajuda`);
}