# Discord Verification Bot

## Overview
A Discord bot that automatically sends verification instructions when new ticket channels are created. The bot runs 24/7 on Replit and monitors all channels that start with "ticket-".

## Current Status
- **Bot Status**: ✅ Running 24/7
- **Bot Username**: Eighty-Six#1649
- **Last Updated**: October 25, 2025

## Features
- Automatically detects when new ticket channels are created (channels starting with "ticket-")
- Sends verification instructions with hand sign requirements
- Runs continuously with automatic reconnection on disconnect
- Secure token storage using Replit Secrets

## Project Structure
```
.
├── index.js           # Main bot code
├── package.json       # Node.js dependencies and scripts
├── .gitignore        # Git ignore file for node_modules and logs
└── replit.md         # This documentation file
```

## Configuration

### Environment Variables
- `DISCORD_BOT_TOKEN` - Your Discord bot token (stored securely in Replit Secrets)

### Discord Bot Setup
The bot requires the following Discord Gateway Intents:
- Guilds
- Guild Messages
- Message Content (Privileged Intent)

## Running the Bot

The bot is configured to run automatically 24/7 on Replit. No manual intervention needed.

### Deployment
- **Deployment Type**: VM (Always-on)
- **Workflow**: Configured to run `npm start` continuously
- **Auto-restart**: Enabled

## How It Works

1. The bot connects to Discord using the token from environment variables
2. It listens for the `channelCreate` event
3. When a new channel is created, it checks if the channel name starts with "ticket-"
4. If it's a ticket channel, the bot sends a welcome message
5. The bot logs all activity to the console for monitoring

## Verification Message
```
Hello

To complete verification, please select one of the approved verification methods listed above.

In addition, your verification photo must include this hand sign.

👌

Please note:
Even if you were previously a member and had already been verified, you are still required to complete this verification process.
```

## User Preferences
- Keep the bot running 24/7 without interruption
- Simple, focused functionality for ticket channel detection

## Architecture Decisions
- **October 25, 2025**: Set up Discord.js v14 with minimal configuration for ticket monitoring
- **October 25, 2025**: Configured VM deployment for always-on hosting
- **October 25, 2025**: Implemented secure token handling via environment variables
