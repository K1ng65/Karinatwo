const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  message.channel.send({embed: {
  color: 3447003,
  description: `oi ${message.author} você quer me chamar(usar) no seu servidor? \n [clique aqui para me convidar para seu servidor](https://discord.com/oauth2/authorize?client_id=743952907291852840&scope=bot&permissions=426056)`
}}); 
message.delete().catch(O_o => {});
console.log(`comando fox/convidar usado`);
}