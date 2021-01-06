const Discord = require('discord.js');
const listGay = require("../database/imagens/Gay.json");
const db = require("megadb");

let VipDB = new db.crearDB("Vip");

module.exports.run = async (client, message, args) => {
  
if(!VipDB.tiene(`${message.author.id}`))
      VipDB.establecer(`${message.author.id}`, {
        vip: 'No'
      })

  const vip = await VipDB.obtener(`${message.author.id}.vip`);

if(vip == 'No') return message.channel.send(`:x: |apenas para usuários **vips**`);
  
if (!message.channel.nsfw) return message.channel.send(":x: | esse canal de texto não tem a função **nsfw** ativada!!");

  var randGay = listGay[Math.floor(Math.random() * listGay.length)];

const embed = new Discord.MessageEmbed().setImage(randGay);
    message.channel.send(embed);
  
};