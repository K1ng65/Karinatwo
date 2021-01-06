const Discord = require("discord.js");
const db = require("megadb");

let PrefixDB = new db.crearDB("Prefix");

exports.run = async (client, message, args) => {

  if(!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(" | Você não tem permissão para executar esse comando! Permissão necessária: `Administrador`");

  if (!PrefixDB.tiene(`${message.guild.id}`))
    PrefixDB.establecer(`${message.guild.id}`, {
      name: message.guild.name,
      prefix: "f/"
    });

  let prefix = await PrefixDB.obtener(`${message.guild.id}.prefix`);

  const newPrefix = args[0]

  const embedError = await new Discord.MessageEmbed()
    .setTitle('Erro')
    .setDescription("**Prefixos com +5 caracteres não são permitidos, assim, evitarei bugs.**")
    .setColor("#e0000f")

  if(newPrefix.length >= 5) return message.channel.send(embedError)

    PrefixDB.set(`${message.guild.id}.prefix`, newPrefix)

  const embed = await new Discord.MessageEmbed()
    .setDescription("**Configurações Atualizadas**")
    .addField("Novo Prefixo:", '`' + newPrefix + '`')
    .setColor("#e0000f")

  message.channel.send(embed);
};