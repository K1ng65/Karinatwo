const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`resebi o ping as ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()} horas`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);

const Discord = require("discord.js");
const client = new Discord.Client();
const canaisLoks = require("./database/IDs/canaisLoks/canais.json");
const bansUsers = require("./database/IDs/bansUsers/bans.json");
const xxx = "`xvideos`\n`e621`\n`pornhub`\n`perfis impropios no twitter`\n`rule34`";
const serverGuild = require('./shards/coinsisten.js');
const cooldown = new Set()
var time_cooldown = 5 * 1000
const db = require("megadb");

client.on("message", async message => {
  
  let PrefixDB = new db.crearDB("Prefix");

  if (!PrefixDB.tiene(`${message.guild.id}`))
    PrefixDB.establecer(`${message.guild.id}`, {
      name: message.guild.name,
      prefix: "f/"
    });

  let prefixoAtual = await PrefixDB.obtener(`${message.guild.id}.prefix`);

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.content.toLowerCase().startsWith(prefixoAtual.toLowerCase())) return;
  if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

if (canaisLoks.includes(message.channel.id))
return message.reply({
  content: "",
  embed: {
    description: "sem comandos aqui \nseu boboca >:V ",
    color: 389301 ,
    footer: {
    text: "tente em uma area especifica desse servidor"
    }
  }
});

if (bansUsers.includes(message.author.id))
return message.reply({
  content: "",
  embed: {
    description: ":no_entry_sign: você foi banido de usar meus comandos!",
    color: 389301 
  }
});

     if (cooldown.has(message.author.id)) return message.channel.send({embed: {
  color: 13893887,
  description: `🔥🔥🔥 hey ${message.author} aguarde 5 segundos para usar outro comando :v`
}});
   cooldown.add(message.author.id);

    const args = message.content
        .trim().slice(prefixoAtual.length)
        .split(/ +/g);
    const comando = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commands/${comando}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error('Erro detectado:' + err);
    message.channel.send({embed: {
  color: 13893887,
  description: "🚫 o comando `"+ (comando) +"` não **existe** ou esta com **erro**."
}})
  }
      setTimeout(() => {
       cooldown.delete(message.author.id);
   }, time_cooldown);
});

client.on("ready", () => {
let activities = [
 `em ${client.guilds.cache.size} servidores!`,
 `em ${client.channels.cache.size} canais!`,
 `meu prefixo padrão e f/`,
 `sou fofa d+ :3`,
 `tenho varios comandos!`,
 `karinaBOT | f/help`
];
i = 0;
setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, {
  type: "PLAYING" //WATCHING, LISTENING, PLAYING, STREAMING
}), 5021); 
  client.user
      .setStatus("online")
      .catch(console.error);
});

//blak list (xvideos)=>{
client.on("message", async message => {
 let LinkDB = new db.crearDB("link");
 let PrefixDB = new db.crearDB("Prefix");

  if (!PrefixDB.tiene(`${message.guild.id}`))
    PrefixDB.establecer(`${message.guild.id}`, {
      name: message.guild.name,
      prefix: "f/"
    });

  if (!LinkDB.tiene(`${message.guild.id}`))
    LinkDB.establecer(`${message.guild.id}`, {
      status: "On"
    });

  let stats = await LinkDB.obtener(`${message.guild.id}.status`)

  let prefixoAtual = await PrefixDB.obtener(`${message.guild.id}.prefix`);

  if (stats === 'Off') return;

  if (message.author.bot) return;
  
  if (message.member.permissions.has("ADMINISTRATOR")) return;

  const regex = /(https?:\/\/)?(www\.)?(xvideos\.(gg|io|me|net|com|li|club)|xvideosapp\.com\/invite|xvideos\.com)\/.+[a-z]/gi;
  if (regex.exec(message.content)) {
    await message.delete({timeout: 1000});
      await message.channel.send({embed: {
  color: 13893887,
  description: `esse link esta na minha **blacklist!**`
}}).then(msg => {
  msg.react('❓').then(r => {
  })

 const infosFilter = (reaction, user) => reaction.emoji.name === '❓' && user.id === message.author.id;

 const infos = msg.createReactionCollector(infosFilter);
 
 infos.on('collect', r2 => {
  msg.delete().then(message.channel.send({
  content: "",
  embed:{
    title: "❓ bloqueadores de links impropios ",
    description: "grasas ao meu criador, eu consigo bloquear links impropios em seu server e deixa-lo mais seguro, \ntodo dia essa tal **BLAK LIST** e atualizada para você não se prelculpar",
    color: 760820,
    fields: [
      {
        name: "quais domínios eu bloqueio? ",
        value: ""+ (xxx) +""
      },
      {
        name: "como desativar e ativar?",
        value: `se você e o dono do servidor você usar o **${prefixoAtual}locklink desativar** para desativar, para reativar usse **${prefixoAtual}locklink ativar**`
      }
    ]
  }
}).then(msg => msg.delete({ timeout: 9000 }))); 
 })
})
  }
});

//bloquear o site e621.net
client.on("message", async message => {
 let PrefixDB = new db.crearDB("Prefix");
 let LinkDB = new db.crearDB("link");

  if (!PrefixDB.tiene(`${message.guild.id}`))
    PrefixDB.establecer(`${message.guild.id}`, {
      name: message.guild.name,
      prefix: "f/"
    });


  if (!LinkDB.tiene(`${message.guild.id}`))
    LinkDB.establecer(`${message.guild.id}`, {
      status: "On"
    });

  let stats = await LinkDB.obtener(`${message.guild.id}.status`)
  let prefixoAtual = await PrefixDB.obtener(`${message.guild.id}.prefix`)

  if (stats === 'Off') return;

  if (message.author.bot) return;

  if (message.member.permissions.has("ADMINISTRATOR")) return;

  const regex = /(https?:\/\/)?(www\.)?(e621\.(gg|io|me|net|com|li|club)|e621app\.com\/invite|e621\.net)\/.+[a-z]/gi;
  if (regex.exec(message.content)) {
    await message.delete({timeout: 1000});
      await message.channel.send({embed: {
  color: 13893887,
  description: `esse link esta na minha **blacklist!**`
}}).then(msg => {
  msg.react('❓').then(r => {
  })

 const infosFilter = (reaction, user) => reaction.emoji.name === '❓' && user.id === message.author.id;

 const infos = msg.createReactionCollector(infosFilter);
 
 infos.on('collect', r2 => {
  msg.delete().then(message.channel.send({
  content: "",
  embed:{
    title: "❓ bloqueadores de links impropios ",
    description: "grasas ao meu criador, eu consigo bloquear links impropios em seu server e deixa-lo mais seguro, \ntodo dia essa tal **BLAK LIST** e atualizada para você não se prelculpar",
    color: 760820,
    fields: [
      {
        name: "quais domínios eu bloqueio? ",
        value: ""+ (xxx) +""
      },
      {
        name: "como desativar e ativar?",
        value: `se você e o dono do servidor você usar o **${prefixoAtual}locklink desativar** para desativar, para reativar usse **${prefixoAtual}locklink ativar**`
      }
    ]
  }
}).then(msg => msg.delete({ timeout: 9000 }))); 
 })
})
  }
});

//bloquear o site pornhub
client.on("message", async message => {
 let PrefixDB = new db.crearDB("Prefix");
 let LinkDB = new db.crearDB("link");
  
  if (!PrefixDB.tiene(`${message.guild.id}`))
    PrefixDB.establecer(`${message.guild.id}`, {
      name: message.guild.name,
      prefix: "f/"
    });
  if (!LinkDB.tiene(`${message.guild.id}`))
    LinkDB.establecer(`${message.guild.id}`, {
      status: "On"
    });

  let stats = await LinkDB.obtener(`${message.guild.id}.status`)
  let prefixoAtual = await PrefixDB.obtener(`${message.guild.id}.prefix`)

  if (stats === 'Off') return;

  if (message.author.bot) return;

  if (message.member.permissions.has("ADMINISTRATOR")) return;

  const regex = /(https?:\/\/)?(www\.)?(pornhub\.(gg|io|me|net|com|li|club)|pornhubapp\.com\/invite|pornhub\.net)\/.+[a-z]/gi;
  if (regex.exec(message.content)) {
    await message.delete({timeout: 1000});
      await message.channel.send({embed: {
  color: 13893887,
  description: `esse link esta na minha **blacklist!**`
}}).then(msg => {
  msg.react('❓').then(r => {
  })

 const infosFilter = (reaction, user) => reaction.emoji.name === '❓' && user.id === message.author.id;

 const infos = msg.createReactionCollector(infosFilter);
 
 infos.on('collect', r2 => {
  msg.delete().then(message.channel.send({
  content: "",
  embed:{
    title: "❓ bloqueadores de links impropios ",
    description: "grasas ao meu criador, eu consigo bloquear links impropios em seu server e deixa-lo mais seguro, \ntodo dia essa tal **BLAK LIST** e atualizada para você não se prelculpar",
    color: 760820,
    fields: [
      {
        name: "quais domínios eu bloqueio? ",
        value: ""+ (xxx) +""
      },
      {
        name: "como desativar e ativar?",
        value: `se você e o dono do servidor você usar o **${prefixoAtual}locklink desativar** para desativar, para reativar usse **${prefixoAtual}locklink ativar**`
      }
    ]
  }
}).then(msg => msg.delete({ timeout: 9000 }))); 
 })
})
  }
});

//perfis improprios(twitter)
client.on("message", async message => {
 let PrefixDB = new db.crearDB("Prefix");
 let LinkDB = new db.crearDB("link");

  if (!PrefixDB.tiene(`${message.guild.id}`))
    PrefixDB.establecer(`${message.guild.id}`, {
      name: message.guild.name,
      prefix: "f/"
    });


  if (!LinkDB.tiene(`${message.guild.id}`))
    LinkDB.establecer(`${message.guild.id}`, {
      status: "On"
    });

  let stats = await LinkDB.obtener(`${message.guild.id}.status`)
  let prefixoAtual = await PrefixDB.obtener(`${message.guild.id}.prefix`)

  if (stats === 'Off') return;

  if (message.author.bot) return;

  if (message.member.permissions.has("ADMINISTRATOR")) return;

  const regex = /(https?:\/\/)?(www\.)?(twitter\.(gg|io|me|net|com|li|club)\/(hanadaiteol|tzarVOLVER|DiivesArt|Kono_pizaga_320|wbfactorynsfw|washlet_mskm|Eipril_Foss|26_suigi|kinokoningen|daikindai|The_Invad3r|_buta99|delki_art|MilaMoraes201|YasmilArt|SepulteAD|desu_box|AshesOnFur|ChilliLemonade|WilderingART|_sudo_poweroff|pupcraft|Newtype_Hero_|crepixZaush|FoxNic0le|_Kyuukon))\/.+[a-z]/gi;
  if (regex.exec(message.content)) {
    await message.delete({timeout: 1000});
      await message.channel.send({embed: {
  color: 13893887,
  description: `esse perfil esta na minha **blacklist!**`
}}).then(msg => {
  msg.react('❓').then(r => {
  })

 const infosFilter = (reaction, user) => reaction.emoji.name === '❓' && user.id === message.author.id;

 const infos = msg.createReactionCollector(infosFilter);
 
 infos.on('collect', r2 => {
  msg.delete().then(message.channel.send({
  content: "",
  embed:{
    title: "❓ bloqueadores de links impropios ",
    description: "grasas ao meu criador, eu consigo bloquear links impropios em seu server e deixa-lo mais seguro, \ntodo dia essa tal **BLAK LIST** e atualizada para você não se prelculpar",
    color: 760820,
    fields: [
      {
        name: "quais domínios eu bloqueio? ",
        value: ""+ (xxx) +""
      },
      {
        name: "como desativar e ativar?",
        value: `se você e o dono do servidor você usar o **${prefixoAtual}locklink desativar** para desativar, para reativar usse **${prefixoAtual}locklink ativar**`
      }
    ]
  }
}).then(msg => msg.delete({ timeout: 9000 }))); 
 })
})
  }
});

//bloquear o site rule34
client.on("message", async message => {
 let PrefixDB = new db.crearDB("Prefix");
 let LinkDB = new db.crearDB("link");

  if (!PrefixDB.tiene(`${message.guild.id}`))
    PrefixDB.establecer(`${message.guild.id}`, {
      name: message.guild.name,
      prefix: "f/"
    });


  if (!LinkDB.tiene(`${message.guild.id}`))
    LinkDB.establecer(`${message.guild.id}`, {
      status: "On"
    });

  let stats = await LinkDB.obtener(`${message.guild.id}.status`)
  let prefixoAtual = await PrefixDB.obtener(`${message.guild.id}.prefix`)

  if (stats === 'Off') return;

  if (message.author.bot) return;

  if (message.member.permissions.has("ADMINISTRATOR")) return;

  const regex = /(https?:\/\/)?(www\.)?(rule34\.(gg|io|xxx|me|net|com|li|club)|rule34app\.com\/invite|rule34\.net)\/.+[a-z]/gi;
  if (regex.exec(message.content)) {
    await message.delete({timeout: 1000});
      await message.channel.send({embed: {
  color: 13893887,
  description: `esse link esta na minha **blacklist!**`
}}).then(msg => {
  msg.react('❓').then(r => {
  })

 const infosFilter = (reaction, user) => reaction.emoji.name === '❓' && user.id === message.author.id;

 const infos = msg.createReactionCollector(infosFilter);
 
 infos.on('collect', r2 => {
  msg.delete().then(message.channel.send({
  content: "",
  embed:{
    title: "❓ bloqueadores de links impropios ",
    description: "grasas ao meu criador, eu consigo bloquear links impropios em seu server e deixa-lo mais seguro, \ntodo dia essa tal **BLAK LIST** e atualizada para você não se prelculpar",
    color: 760820,
    fields: [
      {
        name: "quais domínios eu bloqueio? ",
        value: ""+ (xxx) +""
      },
      {
        name: "como desativar e ativar?",
        value: `se você e o dono do servidor você usar o **${prefixoAtual}locklink desativar** para desativar, para reativar usse **${prefixoAtual}locklink ativar**`
      }
    ]
  }
}).then(msg => msg.delete({ timeout: 9000 }))); 
 })
})
  }
});

// <=} fim da blak list

//eventos basicos {
client.on('message', message => require('./events/help.js')(client, message));
client.on('message', message => require('./events/owo.js')(client, message));
//fim dos eventos }
  
client.login(process.env.TOKEN);