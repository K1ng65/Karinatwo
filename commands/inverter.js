const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    try{
    if(!args[0]) {
      return message.channel.send("escreva algo, pave gelado -_-")
    }
    let str = args.join(' ')
    let msg = str.split(' ').reverse(' ').join(' ')
    message.channel.send(msg)
  } catch(e) {
    message.channel.send("deu erro" +e)
  } 
message.delete().catch(O_o => {});
console.log(`comando fox/inverter usado`);
}