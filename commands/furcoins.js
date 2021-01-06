const Discord = require('discord.js');
const db = require("megadb");


module.exports.run = async (client, message, args) => {
  let MoneyDB = new db.crearDB("Economy");

  if (!MoneyDB.tiene(`${message.author.id}`))
    MoneyDB.establecer(`${message.author.id}`, { coins: 0 });

  let ruby = await MoneyDB.obtener(`${message.author.id}.coins`);

  message.channel.send(`voce tem **${ruby}** Panther-coins!`);
};