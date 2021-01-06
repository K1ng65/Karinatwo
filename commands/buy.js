const Discord = require("discord.js");
const db = require("megadb");

let MoneyDB = new db.crearDB("Economy");
let ChestDB = new db.crearDB("Chests" );
let PrefixDB = new db.crearDB("Prefix");

exports.run = async (client, message, args) => {

    if (!PrefixDB.tiene(`${message.guild.id}`))
    PrefixDB.establecer(`${message.guild.id}`, {
      name: message.guild.name,
      prefix: "f/"
    });

    let prefixoAtual = await PrefixDB.obtener(`${message.guild.id}.prefix`)

  const item = args[0]
  if(!item) return message.channel.send(`Você precisa fornecer o item que deseja comprar! Exemplo: \`` + prefixoAtual + 'buy C|R|L`')

 if(!MoneyDB.tiene(`${message.author.id}`))
      MoneyDB.establecer(`${message.author.id}  `, {
                            coins    : 0   
                          })

  if(!ChestDB.tiene(`${message.author.id}`))
      ChestDB.establecer(`${message.author.id}`, {
                            common   : 0,
                            rare     : 0,
                            legendary: 0
                          })


  const ruby = await MoneyDB.obtener(`${message.author.id}.coins`);
  const com  = await ChestDB.obtener(`${message.author.id}.common`);
  const rar  = await ChestDB.obtener(`${message.author.id}.rare`);
  const leg  = await ChestDB.obtener(`${message.author.id}.legendary`);


  if (item === 'C') {

  if(ruby <= 299) return message.channel.send(`Você não tem **panther-coins** suficientes!`)

    const embed = new Discord.MessageEmbed()
      .setTitle("**Box Comprada**")
      .setDescription(`Você comprou: **x1** por ** 300 panther-coins**`)
      .setColor("#be41f4")
    let compra = await message.channel.send(embed);

    compra.react("<:vip:782239654895419402>");
    ChestDB.sumar(`${message.author.id}.common`, 1);
    MoneyDB.restar(`${message.author.id}.coins`, 300);
  }

  if (item === 'R') {

  if(ruby <= 699) return message.channel.send(`Você não tem **panther-coins** suficientes!`)

    const embed = new Discord.MessageEmbed()
      .setTitle("**Box Comprada**")
      .setDescription(`Você comprou: **x1** por **700 panther-coins**`)
      .setColor("#be41f4")
   message.channel.send(embed);

    ChestDB.sumar(`${message.author.id}.rare`, 1);
    MoneyDB.restar(`${message.author.id}.coins`, 700);

  }

    if (item === 'L') {

  if(ruby <= 7999) return message.channel.send(` Você não tem **panther-coins** suficientes!`)

    const embed = new Discord.MessageEmbed()
      .setTitle("**Box Comprada**")
      .setDescription(`Você comprou: **x1** por **8000 panther-coins**`)
      .setColor("#be41f4")
      message.channel.send(embed);

    ChestDB.sumar(`${message.author.id}.legendary`, 1);
    MoneyDB.restar(`${message.author.id}.coins`, 8000);

  }
}