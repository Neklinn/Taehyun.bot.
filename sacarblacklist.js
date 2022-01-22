const Discord = require('discord.js');
let db = require('megadb')
let blacklist = new db.crearDB('blacklist')

module.exports = {
  name: "unban", 
  alias: [], 

execute (client, message, args){
  
  
   if(message.author.id !== '727559361819443351') return message.channel.send("Invalid Command.Only bot owner can use this command")

   let user = message.mentions.members.first()
   if(!user){
   return message.channel.send("You have to mention an user")
 }
  
  blacklist.eliminar(user.id, user.user.tag)

  let embed = new Discord.MessageEmbed()
  .setDescription(`**${user.user.tag}** have been unbanned`)
  .setColor("GREEN")
  message.channel.send(embed)


  let embed2 = new Discord.MessageEmbed()
  .setDescription("You have been unbanned from the bot. Now, you can play again.")
  user.send(embed2)
  
  
 }

} 