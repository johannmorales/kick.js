import { http } from "./_common.js";
import { Profile } from "../types.js";

/**
 * @param {string} username
 * @returns {Promise<Profile>}
 */
async function getProfile(username) {
  return http(`https://kick.com/api/v2/channels/${username}`);
}

export { getProfile };
