const Discord = require('discord.js'); //puxando a galeria do discord.js

module.exports.run = async (bot, message, args) => { //exportando o comando!
    if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("você não pode fazer isto!"); //se a pessoa não tiver permissões retornar e vai mandar a mensagem
 const sayMessage = args.join(" ") //a mensagem no caso tudo depois que vier do prefixo seguido do comando t.say bla bla bla (tudo que vier após o t.say será escrito)
   message.delete()//deleta a mensagem logo após executar o comando e pegar os args
 message.channel.send(sayMessage) //aqui o comando vai ser mandado no chat que foi solicitado o comando
console.log(`comando fox/say-adm usado`);
}