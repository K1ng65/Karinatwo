const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  var list = [
  'https://cdn.discordapp.com/attachments/747585044947664966/749476473315786882/Untitled-1-1.png',
  'https://cdn.discordapp.com/attachments/747585044947664966/748700340848820395/Egd0C6nU0AE4Gt6.png',
  'https://cdn.discordapp.com/attachments/747585044947664966/748666339027320913/EgdKjh-WkAERYSs.png',
  'https://cdn.discordapp.com/attachments/747585044947664966/748584690448990238/Sem_titulo.png',
  'https://cdn.discordapp.com/attachments/747585044947664966/748583566899806318/EdzXvAcXYAEK50e.jpg',
  'https://cdn.discordapp.com/attachments/747585044947664966/748582878207672480/unknown_1.png',
  'https://cdn.discordapp.com/attachments/747585044947664966/748581032915370094/c06748bda16d520bc28377fb1eb9a114.jpg',
  'https://cdn.discordapp.com/attachments/681199236230283315/748553764822188172/download_12.jpeg',
  'https://cdn.discordapp.com/attachments/644918200399691787/748210841622413322/20200819_144508.png',
  'https://cdn.discordapp.com/attachments/747585044947664966/748183551350014005/6fba8dd6ed0de477e9343825c34bc1e6.jpg',
  'https://cdn.discordapp.com/attachments/747585044947664966/747979325340647484/8615cd3cabe0700ad80ac135623bc699.jpg',
  'https://cdn.discordapp.com/attachments/747585044947664966/747916179762315274/76cdb1d6cecca62c06589f9ebf698722.jpg',
  'https://cdn.discordapp.com/attachments/681199236230283315/747798075245854790/Screenshot_20200825-0942122.png',
  'https://cdn.discordapp.com/attachments/681199236230283315/747816192072220692/unknown-4-2-1.png',
  'https://cdn.discordapp.com/attachments/681199236230283315/747799234543353916/08134233322311.png',
  'https://cdn.discordapp.com/attachments/747585044947664966/749485725044572210/20200826_235559.jpg',
  'https://cdn.discordapp.com/attachments/710682128697786449/744274021805195314/20200815_161008.jpg',
  'https://cdn.discordapp.com/attachments/710682128697786449/748943196280717372/Screenshot_2020-08-28-13-26-39.png',
  'https://cdn.discordapp.com/attachments/710682128697786449/742524671001493614/images_10.jpeg',
  'https://cdn.discordapp.com/attachments/710682128697786449/742524554143989920/images_3.jpeg',
  'https://cdn.discordapp.com/attachments/710682128697786449/742524464381558824/images_13.jpeg',
  'https://cdn.discordapp.com/attachments/710682128697786449/742524464197271572/images_15.jpeg',
  'https://cdn.discordapp.com/attachments/710682128697786449/742491238653231204/4b198d1e403653ab1b491c117065a073.jpg',
  'https://cdn.discordapp.com/attachments/710682128697786449/740372625309696152/FB_IMG_15965889542351813.jpg',
  'https://cdn.discordapp.com/attachments/710682128697786449/740250531938828445/20200804_135014.jpg',
  'https://cdn.discordapp.com/attachments/710682128697786449/727296612594090004/IMG_20200629_193550.jpg',
  'https://cdn.discordapp.com/attachments/710682128697786449/722595026772951040/0105144105551005100104120105.jpg',
  'https://cdn.discordapp.com/attachments/749419555239231573/750748694588162058/Capturar.PNG',
  'https://cdn.discordapp.com/attachments/747585044947664966/751618558458331287/7cc2d3c48f40ca1108693eee274164d2.jpg',
  'https://cdn.discordapp.com/attachments/710682128697786449/742527011792224366/FB_IMG_1596754797990.jpg',
  'https://cdn.discordapp.com/attachments/710682128697786449/742465791068340365/20200810_163144.jpg'

];
var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);

message.channel.send({embed: {
  color: 3447003,
  image: {
      url: `` + (rand) + ``
    }
}});
console.log(`comando fox/gerarmeme usado`);
}