/**
 * @typedef {object} ChannelUserProfile
 * @property {number} id
 * @property {string} username
 * @property {string} slug
 * @property {string} profile_pic
 * @property {boolean} is_staff
 * @property {boolean} is_channel_owner
 * @property {boolean} is_moderator
 * @property {object[]} badges
 * @property {string} badges.type
 * @property {string} badges.text
 * @property {boolean} badges.active
 * @property {number} badges.count
 * @property {string} following_since
 * @property {number} subscribed_for
 * @property {null} banned
 */

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
    await fetch(`https://kick.com/api/v2/messages/send/${channelId}`, {
      headers: {
        accept: "application/json",
        "accept-language": "en-US,en;q=0.9",
        authorization: this.#authorizationToken,
        "cache-control": "max-age=0",
        cluster: "v1",
        "content-type": "application/json",
      },
      referrerPolicy: "strict-origin-when-cross-origin",
      body: `{"content":"${message}","type":"message"}`,
      method: "POST",
      mode: "cors",
      credentials: "include",
    });
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
   *
   * @param {string} channel
   * @param {string} username
   * @param {number?} duration
   */
  async ban(channel, username, minutes) {
    const body = {
      banned_username: username,
      duration: minutes ?? 0,
      permanent: duration === undefined,
    };
    await fetch(`https://kick.com/api/v2/channels/${channel}/bans`, {
      headers: {
        accept: "application/json",
        "accept-language": "en-US,en;q=0.9",
        authorization: this.#authorizationToken,
        "cache-control": "max-age=0",
        cluster: "v1",
        "content-type": "application/json",
        priority: "u=1, i",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
      body: JSON.stringify(body),
      method: "POST",
    });
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

  async mod(channel, username) {
    await fetch(
      `https://kick.com/api/internal/v1/channels/${channel}/community/moderators`,
      {
        headers: {
          accept: "application/json",
          authorization: this.#authorizationToken,
        },
        body: {
          username,
        },
        method: "POST",
      }
    );
  }

  async unmod(channel, username) {
    await fetch(
      `https://kick.com/api/internal/v1/channels/${channel}/community/moderators/${username}`,
      {
        headers: {
          accept: "application/json",
          authorization: this.#authorizationToken,
        },
        body: null,
        method: "DELETE",
      }
    );
  }

  async getProfile(username) {
    const response = await fetch(
      `https://kick.com/api/v2/channels/${username}`,
      {
        body: null,
        method: "GET",
      }
    );

    return await response.json();
  }

  /**
   * Get the user profile for a specific channel
   * @param {string} channel
   * @param {string} username
   * @returns {Promise<ChannelUserProfile>}
   */
  async getChannelUserProfile(channel, username) {
    const response = await fetch(
      `https://kick.com/api/v2/channels/${channel}/users/${username}`,
      {
        headers: {
          accept: "application/json",
        },
        body: null,
        method: "GET",
      }
    );

    return await response.json();
  }

  async isSub(channel, username) {
    const profile = await this.getChannelUserProfile(channel, username);
    return !!profile.badges?.some((badge) => badge.type === "subscriber");
  }
}
