module.exports = (client, message) => {
   const servers = [
    'OWO',
    'owo',
    'OwO'
  ];
  if (servers.includes(message.content)) {
      message.channel.send(`ÒwÓ`); 
  }
}