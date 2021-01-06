const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media1.tenor.com/images/ba7829e33a9392d38e15cdc4c650b897/tenor.gif?itemid=17325139',
  'https://media.giphy.com/media/yidUzriaAGJbsxt58k/giphy.gif',
  'https://loritta.website/assets/img/actions/hug/female_x_female/gif_139.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para abrasar!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle(':3')
        .setColor('#139080')
        .setDescription(`${message.author} acaba de abrasar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Kissu kissu kissu')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
console.log(`comando f/kiss usado`);
}
