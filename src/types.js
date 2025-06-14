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
 * @typedef {object} User
 * @property {number} id
 * @property {string} username
 * @property {boolean} agreed_to_terms
 * @property {string} email_verified_at
 * @property {null} bio
 * @property {null} country
 * @property {null} state
 * @property {null} city
 * @property {null} instagram
 * @property {null} twitter
 * @property {null} youtube
 * @property {null} discord
 * @property {null} tiktok
 * @property {null} facebook
 * @property {null} profile_pic
 */

/**
 * @typedef {object} Chatroom
 * @property {number} id
 * @property {string} chatable_type
 * @property {number} channel_id
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} chat_mode_old
 * @property {string} chat_mode
 * @property {boolean} slow_mode
 * @property {number} chatable_id
 * @property {boolean} followers_mode
 * @property {boolean} subscribers_mode
 * @property {boolean} emotes_mode
 * @property {number} message_interval
 * @property {number} following_min_duration
 */

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
 * @property {object} subscriber_badges
 * @property {null} livestream
 * @property {null} role
 * @property {boolean} muted
 * @property {object} follower_badges
 * @property {null} offline_banner_image
 * @property {boolean} verified
 * @property {object} recent_categories
 * @property {boolean} can_host
 * @property {User} user
 * @property {Chatroom} chatroom
 */

/**
 * @typedef {object} WebSocketOptions
 * @property {string} [binaryType="nodebuffer"] The type for binary data
 * @property {boolean} [autoPong=true] Whether to automatically send a pong in response to a ping
 * @property {number} [maxPayload=0] The maximum allowed message length
 * @property {boolean} [skipUTF8Validation=false] Whether to skip UTF-8 validation for text and close messages
 */

/**
 * @typedef {object} EventOptions
 * @property {boolean} [once=false] Whether the listener should be invoked at most once
 */

/**
 * @typedef {object} CloseEventOptions
 * @property {number} [code=0] The status code explaining why the connection was closed
 * @property {string} [reason=""] A human-readable string explaining why the connection was closed
 * @property {boolean} [wasClean=false] Indicates whether or not the connection was cleanly closed
 */

/**
 * @typedef {object} ErrorEventOptions
 * @property {*} [error=null] The error that generated this event
 * @property {string} [message=""] The error message
 */

/**
 * @typedef {object} MessageEventOptions
 * @property {*} [data=null] The message content
 */

/**
 * @typedef {object} ChatMessageEvent
 * @property {"App\\Events\\ChatMessageEvent"} event
 * @property {object} data
 * @property {string} data.id
 * @property {number} data.chatroom_id
 * @property {string} data.content
 * @property {string} data.type
 * @property {string} data.created_at
 * @property {object} data.sender
 * @property {number} data.sender.id
 * @property {string} data.sender.username
 * @property {string} data.sender.slug
 * @property {object} data.sender.identity
 * @property {string} data.sender.identity.color
 * @property {object[]} data.sender.identity.badges
 * @property {string} data.sender.identity.badges.type
 * @property {string} data.sender.identity.badges.text
 * @property {number} data.sender.identity.badges.count
 * @property {string} channel
 */

/**
 * @typedef {object} PinnedMessageCreatedEvent
 * @property {"App\\Events\\PinnedMessageCreatedEvent"} event
 * @property {object} data
 * @property {object} data.message
 * @property {string} data.message.id
 * @property {number} data.message.chatroom_id
 * @property {string} data.message.content
 * @property {string} data.message.type
 * @property {string} data.message.created_at
 * @property {object} data.message.sender
 * @property {number} data.message.sender.id
 * @property {string} data.message.sender.username
 * @property {string} data.message.sender.slug
 * @property {object} data.message.sender.identity
 * @property {string} data.message.sender.identity.color
 * @property {object[]} data.message.sender.identity.badges
 * @property {string} data.message.sender.identity.badges.type
 * @property {string} data.message.sender.identity.badges.text
 * @property {number} data.message.sender.identity.badges.count
 * @property {null} data.message.metadata
 * @property {string} data.duration
 * @property {object} data.pinnedBy
 * @property {number} data.pinnedBy.id
 * @property {string} data.pinnedBy.username
 * @property {string} data.pinnedBy.slug
 * @property {object} data.pinnedBy.identity
 * @property {string} data.pinnedBy.identity.color
 * @property {object[]} data.pinnedBy.identity.badges
 * @property {string} data.pinnedBy.identity.badges.type
 * @property {string} data.pinnedBy.identity.badges.text
 * @property {boolean} data.pinnedBy.identity.badges.active
 * @property {number} data.pinnedBy.identity.badges.count
 * @property {string} channel
 */

/**
 * @typedef {object} MessageDeletedEvent
 * @property {string} event
 * @property {object} data
 * @property {string} data.id
 * @property {object} data.message
 * @property {string} data.message.id
 * @property {boolean} data.aiModerated
 * @property {string} channel
 */

export {
  ChannelUserProfile,
  User,
  Chatroom,
  Profile,
  WebSocketOptions,
  EventOptions,
  CloseEventOptions,
  ErrorEventOptions,
  MessageEventOptions,
  ChatMessageEvent,
  PinnedMessageCreatedEvent,
  MessageDeletedEvent
}; 
