const Discord = require('discord.js');
let db = require('megadb')
let blacklist = new db.crearDB('blacklist')

module.exports = {
  name: "aegyo", 
  alias: ["cute"], 

execute (client, message, args){

   let user = message.author;
   if(blacklist.tiene(user.id)) return message.channel.send("You can not use this command, your accout has been banned") 

  message.channel.send("im an artist my job is making music not acting cute")

 }

}