module.exports = (client) => {
    console.log('Бот Активирован!')
    client.user.setActivity("Префикс !", { type: "PLAYING" }); //Можете написать сюда свой префикс
}