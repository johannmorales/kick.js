const { http } = require("./_common.js");

/**
 * @typedef {object} ChannelUserProfile
 * @property {number} id
 * @property {string} username
 * @property {string} slug
 * @property {null} profile_pic
 * @property {boolean} is_staff
 * @property {boolean} is_channel_owner
 * @property {boolean} is_moderator
 * @property {object[]} badges
 * @property {"subscriber"} badges.type
 * @property {string} badges.text
 * @property {boolean} badges.active
 * @property {number} badges.count
 * @property {string} following_since
 * @property {number} subscribed_for
 * @property {null} banned
 */

/**
 * @param {string} channel
 * @param {string} username
 * @returns {Promise<ChannelUserProfile>}
 */
async function getChannelUserProfile(channel, username) {
  return http(`https://kick.com/api/v2/channels/${channel}/users/${username}`);
}

module.exports = { getChannelUserProfile };
