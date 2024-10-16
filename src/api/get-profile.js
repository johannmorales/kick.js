import { http } from "./_common.js";

/**
 * @typedef {object} Profile
 * @property {number} id
 * @property {number} user_id
 * @property {string} slug
 * @property {boolean} is_banned
 * @property {string} playback_url
 * @property {boolean} vod_enabled
 * @property {boolean} subscription_enabled
 * @property {number} followers_count
 * @property {} subscriber_badges
 * @property {null} livestream
 * @property {null} role
 * @property {boolean} muted
 * @property {} follower_badges
 * @property {null} offline_banner_image
 * @property {boolean} verified
 * @property {} recent_categories
 * @property {boolean} can_host
 * @property {object} user
 * @property {number} user.id
 * @property {string} user.username
 * @property {boolean} user.agreed_to_terms
 * @property {string} user.email_verified_at
 * @property {null} user.bio
 * @property {null} user.country
 * @property {null} user.state
 * @property {null} user.city
 * @property {null} user.instagram
 * @property {null} user.twitter
 * @property {null} user.youtube
 * @property {null} user.discord
 * @property {null} user.tiktok
 * @property {null} user.facebook
 * @property {null} user.profile_pic
 * @property {object} chatroom
 * @property {number} chatroom.id
 * @property {string} chatroom.chatable_type
 * @property {number} chatroom.channel_id
 * @property {string} chatroom.created_at
 * @property {string} chatroom.updated_at
 * @property {string} chatroom.chat_mode_old
 * @property {string} chatroom.chat_mode
 * @property {boolean} chatroom.slow_mode
 * @property {number} chatroom.chatable_id
 * @property {boolean} chatroom.followers_mode
 * @property {boolean} chatroom.subscribers_mode
 * @property {boolean} chatroom.emotes_mode
 * @property {number} chatroom.message_interval
 * @property {number} chatroom.following_min_duration
 */

/**
 *
 * @param {string} username
 * @returns {Promise<Profile>}
 */
export async function getProfile(username) {
  return http(`https://kick.com/api/v2/channels/${username}`);
}
