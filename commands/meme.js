const Discord = require("discord.js")

exports.run = async (client, message, args) => {
var list = [
  'https://cdn.discordapp.com/attachments/753628468398260265/768284648324595722/unknown.png',
  'https://cdn.discordapp.com/attachments/753628468398260265/768284969218736168/unknown.png',
  'https://cdn.discordapp.com/attachments/753628468398260265/768284648324595722/unknown.png',
  'https://cdn.discordapp.com/attachments/753628468398260265/768284969218736168/unknown.png',
  'https://cdn.discordapp.com/attachments/753628468398260265/768284648324595722/unknown.png',
  'https://cdn.discordapp.com/attachments/753628468398260265/768284969218736168/unknown.png',
  'https://cdn.discordapp.com/attachments/753628468398260265/768284648324595722/unknown.png',
  'https://cdn.discordapp.com/attachments/753628468398260265/768284969218736168/unknown.png',
  'https://cdn.discordapp.com/attachments/753628468398260265/768284648324595722/unknown.png',
  'https://cdn.discordapp.com/attachments/753628468398260265/768284969218736168/unknown.png',
  'https://cdn.discordapp.com/attachments/753628468398260265/768284648324595722/unknown.png',
  'https://cdn.discordapp.com/attachments/753628468398260265/768284969218736168/unknown.png'
];
var rand = list[Math.floor(Math.random() * list.length)];

message.channel.send({
  content: "",
  embed: {
    title: "sera que o Knuckles aprovou seu meme?",
    description: "vamos ver >:3...",
    color: 1639005,
    image: {
      url: `` + (rand) + ``
    }
  }
})

console.log(`comando f/meme usado`);
}