const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  let uptime = `🗓️ ${days.toFixed()} dias\n🗓️ ${hours.toFixed()} horas\n🗓️ ${minutes.toFixed()} minutos\n🗓️ ${seconds.toFixed()} segundos`;
 
 message.channel.send({embed: {
  title: "KARINA",
  description: "sou uma bot de diversão con vários comandos de diversão e gerenciamento \neu quase sempre estou ativa e porque estou com um soninho 😴 \n\nabaixo algumas informações ",
  color: 65531,
  footer: {
    text: "obrigada por ter me adicionado ao seu servidor! reaja em 📚 para mais informações"
  },
  author: {
    name: "desenvolvida por: Zelferry bunny#1171",
    url: "https://www.youtube.com/channel/UC4CgPExGInOXTLUsZdda7ew?view_as=subscriber"
  },
  fields: [
    {
      name: "linguagem ",
      value: "fui feita usando a linguagem de programação JS<:js:753288738200879125>  \neu usso a livraria do [discord.js](https://discord.js.org/#/)<:djs:753290059192467598> \n sou progamada no [repl.it](https://repl.it/)<:replit:753296246202171474> "
    },
    {
      name: "tempo de atividade(tempo que estou online) ",
      value: `${uptime}`
    },
    {
      name: "servidor de suporte",
      value: `oi  ${message.author} entre no meu servidor de suporte na discord e saiba mais coisas sobre mim e etc!! \n \n [clique aqui para entrar no meu servidor de suporte](https://discord.gg/KFDHcVH)`
    },
    {
      name: "estou em..",
      value: `${client.guilds.cache.size} servidores!\n${client.channels.cache.size} canais de texto!\n e estou jogando com ${client.users.cache.size} de membros!`
    },
    {
      name: "fui criada no dia..",
      value: "14/08/2020"
    }
  ]
}}).then(msg => {
  msg.react('📚').then(r => {
  })


 const infosFilter = (reaction, user) => reaction.emoji.name === '📚' && user.id === message.author.id;

 const infos = msg.createReactionCollector(infosFilter);
 
 infos.on('collect', r2 => {
  message.channel.send({embed: {
  color: 3447003,
  description: `🎚️ |Latência da API: **${Math.round(client.ws.ping)}ms** \n\n <:js:753288738200879125> |versão da livraria discord.js: **V12** \n\n <:eta_preuga:748289174691512330> | versão da karina: **1.2.0** \n\n 💜| meu amor por frango frango frito e por vocês: **INFINITO**`
}}); 
 })
})
}