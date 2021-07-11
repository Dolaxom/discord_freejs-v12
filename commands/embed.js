const Discord = require("discord.js");

module.exports = {
  name: "embed", //название команды, то есть то, что нужно вводить в чат вместе с префиксом (!embed)
  description: "Тестовый эмбед", //Описание команды
  guildOnly: true,
  execute(message, args) {
    const Embed = new Discord.MessageEmbed()
      .setColor("E86A6A") //цвет в HEX палитре https://htmlcolorcodes.com/
      .setTitle('Заголовок')
      .setTimestamp() //Поставить дату и время внизу
      .setFooter('Текст под картинкой')
      .setDescription('Описание для вашего эмбеда!'  + "\r\n" + 'А так можно делать отступы на новую строчку \r\n Или даже вот так. Кстати, если написать так \r\n \r\n то выйдет большой отступ. \r\n \r\n Также можно делать ссылки, вот вам например ссылка на мой [Instagram](https://www.instagram.com/duckfromdonskoy/)')
      .setThumbnail('https://i.ibb.co/VmPptBM/Thumbnail.png') // Маленькая картинка сбоку
      .setImage('https://i.ibb.co/jV7YvyW/thedolaxom.png'); //большая картинка снизу

    message.channel.send(Embed);
  },
};

//Просто напишите !embed на своём сервере

//В следующем файле мы посмотрим на пример использования этой команды