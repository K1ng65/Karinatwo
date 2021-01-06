const Discord = require("discord.js");
const db = require("megadb");
const talkedRecently = new Set();
const math = require("mathjs");

let MoneyDB = new db.crearDB("Economy");

exports.run = async (client, message, args) => {

  if (!MoneyDB.tiene(`${message.author.id}`))
    MoneyDB.establecer(`${message.author.id}`, { coins: 0 });

  let ruby = await MoneyDB.obtener(`${message.author.id}.coins`);

  let user = message.author;

  let pesca = ["1", "2", "3", "4", "5","6","7","8","9","10","100"];

  let pescaresult = Math.floor(Math.random() * pesca.length);

  if (talkedRecently.has(message.author.id)) {
    message.channel.send(
      `:x:| Espere 1 dia para poder usar o comando novamente! - ${message.author}`
    );
  } else {
    let answer;
    try {
      answer = math.evaluate(pesca[pescaresult] + " * 10");
    } catch (err) {
      return message.reply(`**Quantia inválida** ${err}`);
    }

    let perf = new Discord.MessageEmbed()
      .setColor("be41f4")
      .setThumbnail(message.author.avatarURL())
      //.setImage('https://media0.giphy.com/media/2HvoTVcuSOnS0/giphy.gif')
      .setDescription(
        "**" +
          message.author.tag +
          `** | Parabéns, Você pescou \`` +
          pesca[pescaresult] +
          ` pokémon(s) aquático(s)\`!! \nQuantia recebida pela venda dos pokémons: \`${answer} Panther-coins\``
      )
      .setTimestamp();

    message.channel.send(perf);
    MoneyDB.sumar(`${message.author.id}.coins`, answer);
  }
  talkedRecently.add(message.author.id);
  setTimeout(() => {
    // Removes the user from the set after a minute
    talkedRecently.delete(message.author.id);
  }, 86400000);
};