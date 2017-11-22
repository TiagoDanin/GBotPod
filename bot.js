const TeleBot = require('telebot');

const bot = new TeleBot({
	token: '165770307:AAEpj3nKXcCykXsLhop_Eknh4YtC9xUbuy4',
	polling: {
		//interval: 1000,
	}
});

const infoMe = bot.getMe();

bot.on('/start', (msg) => {
	console.log(infoMe);
	return msg.reply.text(`Olá meu nome é ${ infoMe.first_name }\n Sou um bot muito legal :)`);
});

bot.on('newChatMembers', (msg) => {
	return bot.sendMessage(msg.chat.id, `Bem vindo ${ msg.new_chat_participant.first_name } ao ${ msg.chat.title}`);
});

bot.on('leftChatMember', (msg) => {
	return bot.sendMessage(msg.chat.id, `${ msg.new_chat_participant.first_name } não sentiremos sua falta!`);
});

bot.start();