require("dotenv").config();
const { Client, GatewayIntentBits, Partials } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Channel],
});

client.once("ready", () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
  console.log(`Bot is ready and monitoring for ticket channels!`);
});

// Detect new ticket channels
client.on("channelCreate", async (channel) => {
  if (!channel.name.startsWith("ticket-")) return;
  
  try {
    // Wait 1 second before sending the message
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    await channel.send(`Hello

To complete verification, please select one of the approved verification methods listed above.

In addition, your verification photo must include this hand sign.

👌

Please note:
Even if you were previously a member and had already been verified, you are still required to complete this verification process.`);
    console.log(`✅ Verification message sent in ${channel.name}`);
  } catch (error) {
    console.error("Failed to send message:", error);
  }
});

// Error handling
client.on("error", (error) => {
  console.error("Discord client error:", error);
});

process.on("unhandledRejection", (error) => {
  console.error("Unhandled promise rejection:", error);
});

// Login with bot token from environment variable
const token = process.env.DISCORD_BOT_TOKEN;

if (!token) {
  console.error("❌ Error: DISCORD_BOT_TOKEN environment variable is not set!");
  console.error("Please add your Discord bot token to the Secrets.");
  process.exit(1);
}

client.login(token).catch((error) => {
  console.error("Failed to login:", error);
  process.exit(1);
});
