exports.handler = function () {
	this.client.user?.setPresence({
		status: "online",
		activity: { name: "p!help", type: "PLAYING" }
	});

	console.log("Bot is online!");
};
