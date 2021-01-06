const Discord = require("discord.js");
const db = require("megadb");

let LinkDB = new db.crearDB("link");

exports.run = async (client, message, args) => {
  
  const f = ":x:";
  const on = "✅";
  const off = "⛔";

  if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(f + " | Você não tem permissão para executar esse comando! ( Exclusivo para adms )");

  if (!LinkDB.tiene(`${message.guild.id}`))
    LinkDB.establecer(`${message.guild.id}`, {
      status: "On"
    });

  let stats = await LinkDB.obtener(`${message.guild.id}.status`);
  const embed = new Discord.MessageEmbed()
    .setDescription("**Configurações Atualizadas**")
    .addField("Status:", `${stats === 'On' ? off : on}`)
    .setColor("#e0000f")
  const embed1 = new Discord.MessageEmbed()
    .setDescription("**Configurações Atuais**")
    .addField("Status:", `${stats === 'On' ? on : off}`)
    .setColor("#e0000f")

  const command = args[0]

  if(command === 'info') return message.channel.send(embed1);

  if(!command) return message.channel.send(`${f} | Você não forneceu o subcomando do módulo.`)
  
if(command === "ativar") {
  
  if(stats === "On") return message.channel.send(`${f} | O módulo já está ligado.`)
  
  if (stats === "Off") {
    LinkDB.set(`${message.guild.id}.status`, "On").then(
      message.channel.send(embed)
    );
  }
}
  
if(command === "desativar") {
  
  if(stats === "Off") return message.channel.send(`${f} | O módulo já está desligado.`)
  
  if (stats === "On") {
    LinkDB.set(`${message.guild.id}.status`, "Off").then(
      message.channel.send(embed)
      );
    }
  }

  if (command === 'help') {
    const embedHelp = new Discord.MessageEmbed()
    .setDescription("**locklink Ajuda**")
    .addField("Comandos:",
              "• **info** -> Mostra as configurações do locklink.\n" +
              "• **ativar/desativar** -> Ativa/Desativa o módulo de proteção contra links improprios."
             )

      message.channel.send(embedHelp)
  }
};