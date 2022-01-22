const Discord = require('discord.js');
let db = require('megadb')
let blacklist = new db.crearDB('blacklist')

module.exports = {
  name: "jumbo", 
  alias: [], 

execute (client, message, args){

   let user = message.author;
   if(blacklist.tiene(user.id)) return message.channel.send("You can not use this command, your accout has been banned") 

  if(!args[0]) return message.channel.send("you need to write an emote")
  
  let emoji = message.guild.emojis.cache.find(x => x.name === args[0].split(":")[1])
  if(!emoji) return message.channel.send("Invalid emoji or could be found")
  
  message.channel.send(emoji.url)

 }

} 