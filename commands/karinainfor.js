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
    name: "clique aqui para entrar em meu servidor de suporte/do canal do meu criador",
    url: "https://discord.gg/vXw72rF8qT"
  },
  fields: [
    {
      name: "linguagem ",
      value: "fui feita usando a linguagem de programação JS \neu usso a livraria do [discord.js](https://discord.js.org/#/)\n sou progamada no [repl.it](https://repl.it/)"
    },
    {
      name: "tempo de atividade(tempo que estou online) ",
      value: `${uptime}`
    },
    {
      name: "estou em..",
      value: `${client.guilds.cache.size} servidores!\n${client.channels.cache.size} canais de texto!`
    },
    {
      name: "fui criada no dia..",
      value: "29/12/2020"
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
  description: `🎚️ |Latência da API: **${Math.round(client.ws.ping)}ms** \n\n<:JS:795642149826986025> |versão da livraria discord.js: **V12** \n\n 🐺| versão da karina: **3.2.1** \n\n 💜| meu amor por frango frango frito e por vocês: **INFINITO**`
}}); 
 })
})
}