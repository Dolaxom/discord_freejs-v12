//Сначала посмотрите embed.js!!!

const Discord = require("discord.js");

module.exports = {
  name: "tea", 
  description: "Тестовый эмбед", 
  guildOnly: true,
  execute(message, args) {
    const Embed = new Discord.MessageEmbed()
      .setColor("E86A6A") 
      .setDescription(message.author.username + ' выпил кружечку чая ☕')
      .setImage('https://media1.tenor.com/images/0528aacfb3608e51fa6e7eeaf655c6dc/tenor.gif?itemid=13574312'); 

    message.channel.send(Embed);
  },
};

//Просто напишите !tea на своём сервере