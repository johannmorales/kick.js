import {
  ban,
  chat,
  getChannelUserProfile,
  getProfile,
  mod,
  unmod,
} from "./api/index.js";
import { reply } from "./api/reply.js";

import { joinChatroom } from "./ws/index.js";

export class Kick {
  #authorizationToken;

  /**
   * @param {string} authorizationToken
   */
  constructor(authorizationToken) {
    this.#authorizationToken = authorizationToken;
  }

  /**
   * @param {string} chatroomId
   */
  async joinChatroom(chatroomId) {
    return joinChatroom(chatroomId);
  }
  /**
   * Send a message in chat using the user's authorization token
   * @param {string} channelId
   * @param {string} message
   */
  async chat(channelId, message) {
    return chat(this.#authorizationToken, channelId, message);
  }

  /**
   *
   * @param {string} channelId
   * @param {import("./ws/join-chatroom.js").ChatMessageEvent['data']} originalMessage
   * @param {string} message
   * @returns
   */
  async reply(channelId, originalMessage, message) {
    return reply(this.authorizationToken, channelId, originalMessage, message);
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
