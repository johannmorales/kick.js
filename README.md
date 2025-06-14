# kick.js

An unofficial client for interacting with Kick's API.

> ⚠️ This package is not affiliated with, endorsed by, or sponsored by Kick.com. Use at your own risk.

## Installation

```bash
npm install @johannmorales/kick.js
```

## Authentication

Some methods require authentication using a Kick token. You can get your token from your browser's requests after logging into Kick.com.

## Features

- Subscribe to chat messages
- Send messages
- Get user profiles
- Get channel user profiles
- Ban/unban users
- Mod/unmod users
- Watch livestreams

## Examples

### Subscribe to Chat Messages

```javascript
import { joinChatroom } from '@johannmorales/kick.js';

// Get the chatroom ID from the channel profile
const chatroom = joinChatroom('CHATROOM_ID');

// Listen for messages
chatroom.on('message', (message) => {
  console.log(`${message.sender.username}: ${message.content}`);
});
```

### Send a Message

```javascript
import { chat } from '@johannmorales/kick.js';

// Requires authentication
await chat('your-kick-token', 'channel_name', 'Hello, Kick!');
```

### Get User Profile

```javascript
import { getProfile } from '@johannmorales/kick.js';

// Get a user's profile
const profile = await getProfile('username');
console.log(profile);
```

### Get Channel User Profile

```javascript
import { getChannelUserProfile } from '@johannmorales/kick.js';

// Get a user's profile in a specific channel
const userProfile = await getChannelUserProfile('channel_name', 'username');
console.log(userProfile);
```

## API Reference

### Chat Methods

| Method | Description | Auth Required |
|--------|-------------|---------------|
| `chat(token, channel, message)` | Send a message to a channel | Yes |
| `joinChatroom(chatroomId)` | Subscribe to chat messages | No |

### User Methods

| Method | Description | Auth Required |
|--------|-------------|---------------|
| `getProfile(username)` | Get a user's profile | No |
| `getChannelUserProfile(channel, username)` | Get a user's profile in a channel | No |

### Moderation Methods

| Method | Description | Auth Required |
|--------|-------------|---------------|
| `ban(token, channel, username, duration?)` | Ban a user from a channel | Yes |
| `unmod(token, channel, username)` | Remove moderator status from a user | Yes |
| `mod(token, channel, username)` | Make a user a moderator | Yes |

### Stream Methods

| Method | Description | Auth Required |
|--------|-------------|---------------|
| `userWatchLivestream(token, username)` | Emit "Watch a user's livestream" event | Yes |

## License

MIT
