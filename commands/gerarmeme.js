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
  'https://cdn.discordapp.com/attachments/710682128697786449/742465791068340365/20200810_163144.jpg',
  'https://cdn.discordapp.com/attachments/747585044947664966/752305936567107674/O_de_cima_agora_e_baiano.png',
  'https://cdn.discordapp.com/attachments/747585044947664966/752304060379430912/4f806bde8fdd435983bdd5a66143d057_1599265483061.png',
  'https://cdn.discordapp.com/attachments/681199236230283315/747798075245854790/Screenshot_20200825-0942122.png',
  'https://cdn.discordapp.com/attachments/678392481355661333/747853704878751846/IMG-20200825-WA0006.jpg',
  'https://cdn.discordapp.com/attachments/747585044947664966/747664590128545792/1772734b-24ce-4cf2-813f-71beec56d21b.png',
  'https://cdn.discordapp.com/attachments/747585044947664966/747606471977599087/IMG_20200824_195834_080.jpg',
  'https://cdn.discordapp.com/attachments/747585044947664966/747591004449800263/49e1b010026e1e1520c63391a08899e8.jpg',
  'https://cdn.discordapp.com/attachments/747585044947664966/747586719817269378/a3df4b4d27abacccf8b84a393f7b8c64.jpg',
  'https://cdn.discordapp.com/attachments/776570928267001881/776600436227702835/unknown.png',
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTo7bKomp-1j5cRHPcoXejzhnS_GDsZVu1jkg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1LJMKjaa5RYPlJheNuZGnO5Hx4C1ZQlOoQg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSikJtprG1gNxHz422-NxF5V6afNKJHkILRXg&usqp=CAU",    "https://cdn.discordapp.com/attachments/537436830644174888/722515672327913482/Z.png",
    "https://cdn.discordapp.com/attachments/537436830644174888/721399353578618980/Screenshot_20200413-1620352.png",
    "https://cdn.discordapp.com/attachments/537436830644174888/721397844908441731/FB_IMG_1592064998671.jpg",
    "https://cdn.discordapp.com/attachments/537436830644174888/721350098025709649/595a48cd2cf320d38de60c5cc2db229a.jpg",
    "https://cdn.discordapp.com/attachments/537436830644174888/721218441201057802/99010786_260583428723314_6443802143273335000_n.png",
    "https://cdn.discordapp.com/attachments/537436830644174888/720315545953632256/20200610_125350.jpg",
    "https://cdn.discordapp.com/attachments/537436830644174888/719969758757519420/Z.png",
    "https://cdn.discordapp.com/attachments/297732013006389252/696870075008942120/83578331_193367885107804_3974484421284724736_o.png",
    "https://cdn.discordapp.com/attachments/537436830644174888/714194135187193936/IMG-20200524-WA0029.jpg",
    "https://cdn.discordapp.com/attachments/537436830644174888/713817760068534282/IMG_20190423_031707.jpg",
    "https://cdn.discordapp.com/attachments/537436830644174888/713788900258349056/FB_IMG_1580744860515.jpg",
    "https://cdn.discordapp.com/attachments/537436830644174888/713400577501036624/Screenshot_20200522-113846.png",
    "https://cdn.discordapp.com/attachments/597121888472399912/711214110767054868/FB_IMG_1589337569956.png",
    "https://cdn.discordapp.com/attachments/537436830644174888/709947633783013466/FB_IMG_1577831919849.jpg",
    "https://cdn.discordapp.com/attachments/537436830644174888/709947633531093112/FB_IMG_1580410152556.jpg",
    "https://cdn.discordapp.com/attachments/537436830644174888/709947633170513992/IMG-20200314-WA0004.jpg",
    "https://cdn.discordapp.com/attachments/537436830644174888/709579532033720360/FB_IMG_15888940674391276.jpg",
    "https://cdn.discordapp.com/attachments/297732013006389252/709501450438574181/unknown.png",
    "https://cdn.discordapp.com/attachments/537436830644174888/708113990013681804/IMG-20200506-WA0013.jpg",
    "https://cdn.discordapp.com/attachments/537436830644174888/708113989745377332/IMG-20200506-WA0034.jpg",
    "https://cdn.discordapp.com/attachments/537436830644174888/708113989552439336/FB_IMG_1588813700994.jpg",
    "https://cdn.discordapp.com/attachments/537436830644174888/708113988965236756/FB_IMG_1588867563069.jpg",
    "https://cdn.discordapp.com/attachments/537436830644174888/708113857893105825/FB_IMG_1588897832157.jpg",
    "https://cdn.discordapp.com/attachments/537436830644174888/706276865945501718/EXCuBl-XYAcy0iM.png",
    "https://cdn.discordapp.com/attachments/680920566517334061/705430605067714670/IMG_20200414_224316.jpg",
    "https://cdn.discordapp.com/attachments/537436830644174888/705162921503752272/FB_IMG_1588194307864.jpg",
    "https://cdn.discordapp.com/attachments/537436830644174888/704860877450379324/55d219dd7fa833780433b0afbf721f21.jpg",
    "https://cdn.discordapp.com/attachments/297732013006389252/704467536405856366/IMG_20190903_131522.jpg"

];
var rand = list[Math.floor(Math.random() * list.length)];

message.channel.send({embed: {
  color: 3447003,
  image: {
      url: `` + (rand) + ``
    }
}});
console.log(`comando f/gerarmeme usado`);
}