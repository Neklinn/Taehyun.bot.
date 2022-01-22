const Discord = require('discord.js');
let db = require('megadb')
let blacklist = new db.crearDB('blacklist')

module.exports = {
  name: "avatar", 
  alias: ["av"], 

execute (client, message, args){

   let user = message.author;
   if(blacklist.tiene(user.id)) return message.channel.send("You can not use this command, your accout has been banned") 

  const usuario = message.mentions.members.first() || message.member

  const embed = new Discord.MessageEmbed()
  .setTitle(`Avatar of ${usuario.user.username}`) 
  .setImage(usuario.user.displayAvatarURL({ size: 1024, dynamic: true})) 
  .setFooter(`Solicitado por: ${message.author.tag}`)

  message.channel.send(embed)

 }

} 