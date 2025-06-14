import { http } from "./_common.js";
import { ChannelUserProfile } from "../types.js";

/**
 * @param {string} channel
 * @param {string} username
 * @returns {Promise<ChannelUserProfile>}
 */
async function getChannelUserProfile(channel, username) {
  return http(`https://kick.com/api/v2/channels/${channel}/users/${username}`);
}

export { getChannelUserProfile };
