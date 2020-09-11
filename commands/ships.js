const Canvas = require('canvas');
const Discord = require('discord.js')
const canvas = Canvas.createCanvas(384, 128);
const ctx = canvas.getContext('2d');
const { createCanvas, loadImage } = require('canvas')

module.exports.run = async (bot, message, args) => {//exportando o comando como ship
  let membro1 = message.mentions.members.first()
    let membro2 = message.mentions.members.last()
  
  if(!membro1 || !membro2) return message.channel.send('Lembre-se de mencionar dois usuários para shippar')
    if(membro1 === membro2) return message.channel.send('Mencione duas pessoas diferentes')
  
  const amor = Math.floor(Math.random() * 100);
    const loveIndex = Math.floor(amor / 10);
  const loveLevel = ">".repeat(loveIndex) + ".".repeat(10 - loveIndex);

    let nomeFim1 = membro1.user.username.length;
      let nomeFim2 = membro2.user.username.length;

      let calc1 = nomeFim1 - 3
    let calc2 = nomeFim2 - 3
  
  let nomeship;
    if(amor > 60) {
      nomeship = membro1.user.username.slice(0, 3) + membro2.user.username.slice(0, 3);
    } else if(amor >= 40) {
      nomeship = membro1.user.username.slice(0, calc1) + membro2.user.username.slice(0, calc2)
    } else {
      nomeship = membro1.user.username.slice(calc1, nomeFim1) + membro2.user.username.slice(calc2, nomeFim2)
    } 
  
  let emoticon;
    if(amor > 60) {
      emoticon = ("https://cdn140.picsart.com/247481714005212.png?r1024x1024"); //imagem de coração
    } else if(amor >= 40) {
      emoticon = ("https://www.laboremploymentreport.com/wp-content/uploads/sites/82/2018/02/Thinking_Face_Emoji-300x300.png"); //imagem de sei lá
    } else {
      emoticon = ("http://www.pngmart.com/files/8/Crying-Emoji-PNG-Image-Free-Download.png"); //imagem chorando
    }

  let desc;
    if(amor > 90) {
      desc = (":sparkling_heart: HMMM, vai rolar paixão ou não vai? 7w7 :sparkling_heart:\n``"+membro1.user.username+"``\n``"+membro2.user.username+"``\n:heart: ``"+nomeship+"`` Esse é o casal perfeito! ;0; 7w7 :heart:");
    } else if(amor >= 70) {
      desc = (":sparkling_heart: HMMM, vai rolar ou não vai? 7w7 :sparkling_heart:\n``"+membro1.user.username+"``\n``"+membro2.user.username+"``\n:neutral_face: ``"+nomeship+"`` Esses aqui já tão se pegando e n contaram pra ngm! 7w7  :neutral_face:");
    } else if(amor >= 45) {
      desc = (":sparkling_heart: HMMM, vai rolar ou não vai? 7w7 :sparkling_heart:\n``"+membro1.user.username+"``\n``"+membro2.user.username+"``\n:no_mouth: ``"+nomeship+"`` Talvez só precisa o "+membro2.user.username+" querer... :no_mouth:");
    } else {
      desc = (":sparkling_heart: HMMM, vai rolar ou não vai? 7w7 :sparkling_heart:\n``"+membro1.user.username+"``\n``"+membro2.user.username+"``\n:cry: ``"+nomeship+"``queria muito dizer que é possivel mas... ;-; :cry: ");
    }
  
  const canvas = Canvas.createCanvas(384, 128);
  const ctx = canvas.getContext('2d');
    
  const emote = await Canvas.loadImage(emoticon);
    const foto1 = await Canvas.loadImage(membro1.user.displayAvatarURL({format: "png"}))
  const foto2 = await  Canvas.loadImage(membro2.user.displayAvatarURL({format: "png"}))

    ctx.drawImage(emote, 125, 0, 128, 128)
      ctx.drawImage(foto1, -10, 0, 128, 128)
    ctx.drawImage(foto2, 260, 0, 128, 128)

 const amorat = new Discord.MessageAttachment(canvas.toBuffer(), 'chances-image.png')
      
  
let amorEmbed = new Discord.MessageEmbed()
  .setColor('#00BFFF')
    .setDescription("**"+amor+"%** [`"+loveLevel+"`]")
  .attachFiles([amorat]).setImage('attachment://chances-image.png')


  message.channel.send('<@'+message.author.id+'> \n'+desc, amorEmbed)

  
}