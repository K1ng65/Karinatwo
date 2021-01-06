const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  var list = [
    'https://gifimage.net/wp-content/uploads/2017/07/anime-slap-gif-14.gif',
    'https://media.giphy.com/media/3pSKnxaDzl9Oo/giphy.gif',
    'https://i0.kym-cdn.com/photos/images/original/001/276/444/aee.gif',
    'https://media.giphy.com/media/Qv7WFppXtkqkM/giphy.gif'


  ];

  var rand = list[Math.floor(Math.random() * list.length)];
  let user = message.mentions.users.first() || client.users.cache.get(args[0]);
  if (!user) {
    return message.reply('lembre-se de mencionar um usuário válido para dar o tapa! ');
  }
  /*
  message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
  */
  let avatar = message.author.displayAvatarURL({ format: 'png' });
  const embed = new Discord.MessageEmbed()
    .setTitle('TAP')
    .setColor('#000000')
    .setDescription(`${message.author} acaba de dar um tapa na cara de ${user}`)
    .setImage(rand)
    .setThumbnail(avatar)
    .setFooter('AI!! D:')
    .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
  message.delete().catch(O_o => { });
  console.log(`comando f/slap usado`);
}