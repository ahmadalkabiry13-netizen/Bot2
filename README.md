# Discord Verification Bot - Setup Guide

A Discord bot that automatically sends verification instructions in new ticket channels.

## Files Needed
- `index.js` - Main bot code
- `package.json` - Dependencies
- `.env` - Your bot token (you'll create this)

## Setup Instructions

### 1. Download Your Bot Files
Download these files from Replit:
- `index.js`
- `package.json`

### 2. Install Node.js
If you don't have Node.js installed:
- Go to https://nodejs.org/
- Download and install the LTS version (v20 recommended)

### 3. Set Up Your Bot Locally

Open a terminal/command prompt and navigate to your bot folder, then run:

```bash
# Install dependencies
npm install

# Create a .env file with your bot token
# On Windows (Command Prompt):
echo DISCORD_BOT_TOKEN=YOUR_TOKEN_HERE > .env

# On Mac/Linux:
echo "DISCORD_BOT_TOKEN=YOUR_TOKEN_HERE" > .env
```

Replace `YOUR_TOKEN_HERE` with your actual Discord bot token.

### 4. Run Your Bot

```bash
npm start
```

Your bot will now run! Keep the terminal window open to keep the bot online.

## Running 24/7 on Your Computer

### Windows:
- Keep your computer on and the terminal running
- Or use Task Scheduler to start the bot automatically

### Mac/Linux:
- Keep your computer on and the terminal running
- Or use `pm2` for automatic restarts:
  ```bash
  npm install -g pm2
  pm2 start index.js --name discord-bot
  pm2 startup
  pm2 save
  ```

## Free Hosting Alternatives

### Option 1: Railway.app
1. Sign up at https://railway.app/
2. Connect your GitHub repository
3. Add `DISCORD_BOT_TOKEN` in environment variables
4. Deploy!

### Option 2: Render.com (Free Tier)
1. Sign up at https://render.com/
2. Create a new Web Service
3. Connect your GitHub repository
4. Add environment variable: `DISCORD_BOT_TOKEN`
5. Deploy!

### Option 3: Fly.io (Free Tier)
1. Sign up at https://fly.io/
2. Install flyctl CLI
3. Run `fly launch` in your project folder
4. Add secret: `fly secrets set DISCORD_BOT_TOKEN=your_token`
5. Deploy with `fly deploy`

## Bot Features

- Detects new ticket channels (channels starting with "ticket-")
- Waits 1 second after channel creation
- Sends verification instructions with hand sign emoji 👌

## Troubleshooting

**Bot doesn't start:**
- Make sure Node.js is installed: `node --version`
- Check that `DISCORD_BOT_TOKEN` is set correctly
- Verify your bot token is valid

**Bot goes offline:**
- Keep the terminal/command prompt window open
- Use pm2 or host on a cloud service for 24/7 operation

**Permission errors:**
- Make sure your bot has the required permissions in Discord
- Enable "Message Content Intent" in Discord Developer Portal

## Support

If you need help, check:
- Discord.js Documentation: https://discord.js.org/
- Discord Developer Portal: https://discord.com/developers/applications
