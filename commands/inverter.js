const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  try {
      if (!args[0]) return message.reply('Você precisa inserir o texto para reverter!');
      
      const str = args.join(' ');
      let msg = await message.channel.send(str.split('').reverse().join(''));
      msg.react('🔁');
    } catch (err) {
      message.channel.send('Aconteceu um erro!\n' + err).catch();
    }
  
message.delete().catch(O_o => {});
console.log(`comando f/inverter usado`);
};