//Не трогайте этот файл!!!

const Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports = (client, message) => {
    if (!message.content.startsWith(prefix)) return
    if (message.author.bot) return
    if (message.channel.type == 'dm') return

    const args = message.content.substring(prefix.length).split(" ")

    const command = client.commands.get(args[0])
    || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(args[0]))

    if (!command) return

    if (!client.cooldowns.has(command.name)) {
        client.cooldowns.set(command.name, new Discord.Collection())
    }

    const now = Date.now()
    const timestamps = client.cooldowns.get(command.name)
    const cooldownAmount = (command.cooldown || 0) * 1000
    
    if (timestamps.has(message.author.id)) {
        const expirationDate = timestamps.get(message.author.id) + cooldownAmount 

        if (now < expirationDate) {
            const timeLeft = (expirationDate - now) / 1000
            return message.channel.send(`Подождите ${timeLeft.toFixed(1)} секунд перед повторным использованием команды ${command.name}.`)
        }
    }

    timestamps.set(message.author.id, now)
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount)

    try {
        command.execute(message, args, client)
    } catch (error) {
        console.log(error)
        return message.channel.send("Произошла ошибка при выполнении команды")
    }
}
