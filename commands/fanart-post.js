const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  message.channel.send({embed: {
  color: 3547013,
  description: `fanarts são muito bonitas ne ${message.author}? \n\n quetal você postar algumas para min no meu site! \n https://zelferrybrburry.wixsite.com/karinabot/fanarts`
}}); 
message.delete().catch(O_o => {});
console.log(`comando fox/fanart-post usado`);
}