import {
  ban,
  chat,
  getChannelUserProfile,
  getProfile,
  mod,
  unmod,
} from "./api/index.js";

export class Kick {
  #authorizationToken;

  /**
   * @param {string} authorizationToken
   */
  constructor(authorizationToken) {
    this.#authorizationToken = authorizationToken;
  }

  /**
   * Send a message in chat using the user's authorization token
   * @param {string} channelId
   * @param {string} message
   */
  async chat(channelId, message) {
    return chat(this.#authorizationToken, channelId, message);
  }

  async reply(authorizationToken, channelId, originalMessage, message) {
    const body = {
      content: message,
      type: "reply",
      metadata: {
        original_message: {
          id: originalMessage.id,
          content: originalMessage.content,
        },
        original_sender: {
          id: originalMessage.sender.id,
          username: originalMessage.sender.username,
        },
      },
    };
    await fetch(`https://kick.com/api/v2/messages/send/${channelId}`, {
      headers: {
        accept: "application/json",
        "accept-language": "en-US,en;q=0.9",
        authorization: authorizationToken,
        "cache-control": "max-age=0",
        cluster: "v1",
        "content-type": "application/json",
      },
      referrerPolicy: "strict-origin-when-cross-origin",
      body: JSON.stringify(body),
      method: "POST",
      mode: "cors",
      credentials: "include",
    });
  }

  /**
   * @param {string} channel
   * @param {string} username
   * @param {number?} duration
   */
  async ban(channel, username, minutes) {
    return ban(this.#authorizationToken, channel, username, minutes);
  }

  /**
   * Check wether a channel is online or not (uses current viewers)
   * @param {string} channelId
   * @returns {Promise<boolean>}
   */
  async isOnline(channelId) {
    try {
      const response = await fetch(
        `https://kick.com/current-viewers?ids[]=${channelId}`
      );
      return !!response?.[0]?.viewers;
    } catch (error) {
      return false;
    }
  }

  /**
   * @param {string} channel
   * @param {string} username
   */
  async mod(channel, username) {
    mod(this.#authorizationToken, channel, username);
  }

  /**
   * @param {string} channel
   * @param {string} username
   */
  async unmod(channel, username) {
    return await unmod(this.#authorizationToken, channel, username);
  }

  /**
   * @param {string} username
   */
  async getProfile(username) {
    return getProfile(username);
  }

  /**
   * Get the user profile for a specific channel
   * @param {string} channel
   * @param {string} username
   */
  async getChannelUserProfile(channel, username) {
    return getChannelUserProfile(channel, username);
  }

  async isSub(channel, username) {
    const profile = await this.getChannelUserProfile(channel, username);
    return !!profile.badges?.some((badge) => badge.type === "subscriber");
  }
}
