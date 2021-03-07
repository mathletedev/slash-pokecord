import Bot from "./bot";
import { config } from "dotenv";
config();

const _ = new Bot(process.env.BOT_TOKEN!);
