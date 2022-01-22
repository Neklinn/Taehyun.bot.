const Discord = require('discord.js');

module.exports = {
  name: "ping", 
  alias: [], 

execute (client, message, args){

  let ping = client.ws.ping

  let embed = new Discord.MessageEmbed()
  .setDescription(`${message.author}, you ponged in **${ping}**`) 
  .setColor("GREEN")
  message.channel.send(embed)

 }

} 