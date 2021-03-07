import { Message } from "discord.js";

exports.handler = function (message: Message) {
	message.reply("Hello World!");
};
