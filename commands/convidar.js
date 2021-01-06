const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  message.channel.send({embed: {
  color: 3447003,
  description: `oi ${message.author} você quer me chamar no seu servidor? \n [clique aqui para me convidar para seu servidor](https://discord.com/oauth2/authorize?client_id=793530706319114261&scope=bot&permissions=2081422591)`
}}); 
message.delete().catch(O_o => {});
console.log(`comando f/convidar usado`);
}