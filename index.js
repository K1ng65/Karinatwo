const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`resebi o ping as ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()} horas`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos

const cooldown = new Set()
var time_cooldown = 5 * 1000

client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix)) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
     if (cooldown.has(message.author.id)) {
       message.channel.send({embed: {
  color: 13893887,
  description: `🔥🔥🔥 hey ${message.author} aguarde 5 segundos para usar outro comando :v`
}});
   } else {
       cooldown.add(message.author.id);

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    
    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro detectado:' + err);
    message.channel.send({embed: {
  color: 13893887,
  description: `🚫 o **comando** cetado não existe ou esta com **erro**, \n verifque a ortografia ou usse **fox/help**`
}});}
      setTimeout(() => {
       cooldown.delete(message.author.id);
   }, time_cooldown);
}
});

client.on("ready", () => {
let activities = [
 `em ${client.guilds.cache.size} servidores!`,
 `em ${client.channels.cache.size} canais!`,
 `com ${client.users.cache.size} usuários simultaneamente!`,
 `entre no meu servidor de suporte! https://discord.gg/KFDHcVH`,
 `meu prefixo e fox/`,
 `sou muito fofa :3`,
 `tenho muitos comandos de diversão e de adms!`,
 `karinaBOT | fox/help`
],
i = 0;
setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, {
  type: "PLAYING" //WATCHING, LISTENING, PLAYING, STREAMING
}), 5000); 
  client.user
      .setStatus("online")
      .catch(console.error);
});

client.on("guildMemberAdd", async (member) => { 

  let guild = await client.guilds.cache.get("749419554861482056");
  let channel = await client.channels.cache.get("753657078886695012");
  let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === "REPLIT");
  if (guild != member.guild) {
    return console.log("Sem boas-vindas pra você! Sai daqui saco pela.");
   } else {
      let embed = await new Discord.MessageEmbed()
      .setColor("#7c2ae8")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`${emoji} Boas-vindas ${emoji}`)
      .setImage("https://cdn.discordapp.com/attachments/746933930170515517/747289914974011402/484_Sem_Titulo.png")
      .setDescription(`**${member.user}**, bem-vindo(a) ao servidor **${guild.name}** servidor de suporte da bot karina! Atualmente estamos com **${member.guild.memberCount} membros**, divirta-se conosco! :heart:`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setFooter("SERVIDOR DE SUPORTE")
      .setTimestamp();

    channel.send(embed);
  }
});

client.on("guildMemberRemove", async (member) => { 

  let guild = await client.guilds.cache.get("749419554861482056");
  let channel = await client.channels.cache.get("753658906135494716");
  let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === "REPLIT");
  if (guild != member.guild) {
    return console.log("Algum saco pela saiu do servidor. Mas não é nesse, então tá tudo bem :)");
   } else {
      let embed = await new Discord.MessageEmbed()
      .setColor("#7c2ae8")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`${emoji} Adeus! ${emoji}`)
      .setDescription(`**${member.user.username}**, saiu do servidor! :broken_heart:`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setFooter(":|")
      .setTimestamp();

    channel.send(embed);
  }
});

client.on("message", async message => {
  const regex = /(https?:\/\/)?(www\.)?(xvideos\.(gg|io|me|com|li|club)|xvideosapp\.com\/invite|xvideos\.com\/invite)\/.+[a-z]/gi;
  if (regex.exec(message.content)) {
    await message.delete({timeout: 1000});
      await message.channel.send({embed: {
  color: 79258,
  description: `EI QUER LEVAR **BAN** ${message.author}?!!! \n links do xvideos não são **tolerados**!!`
}}); 
  }
});

const Client = require("@replit/database");

client.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o token