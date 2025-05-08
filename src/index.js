const { ban } = require("./api/ban.js");
const { chat } = require("./api/chat.js");
const { getChannelUserProfile } = require("./api/get-channel-user-profile.js");
const { getProfile } = require("./api/get-profile.js");
const { mod } = require("./api/mod.js");
const { unmod } = require("./api/unmod.js");
const { userWatchLivestream } = require("./api/user-watch-livestream.js");
const { joinChatroom } = require("./ws/join-chatroom.js");

module.exports = {
  getProfile,
  getChannelUserProfile,
  ban,
  unmod,
  chat,
  mod,
  joinChatroom,
  userWatchLivestream,
};


userWatchLivestream(
  "Bearer 207925072|GNDiQKOt7mhvLOxA07ZfUYRycccDeqzGDCRRR7qO",
  6100370,
).catch((error) => console.error(error));
