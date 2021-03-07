import { Client, ClientOptions } from "discord.js";
import { readdirSync } from "fs";
import { join } from "path";

export default class Bot {
	public client: Client;

	public constructor(
		token: string,
		options: ClientOptions | undefined = undefined
	) {
		this.client = new Client(options);

		this.loadEvents();

		this.client.login(token);
	}

	public loadEvents() {
		readdirSync(join(__dirname, "events")).forEach((file) => {
			const handler: () => any = require(`./events/${file}`).handler;

			this.client.on(file.slice(0, file.length - 3), handler.bind(this));
		});
	}
}
