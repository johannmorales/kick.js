const { http } = require("./_common.js");

async function userWatchLivestream(authorizationToken, channelId, message) {
  await http(`https://kick.com/api/v2/user/events`, {
    headers: {
      authorization: authorizationToken,
      "content-type": "application/json",
    },
    body: `[{"name":"tracking.user.watch.livestream","channel_id":${channelId}}]`,
    method: "POST",
  });
}

module.exports = { userWatchLivestream };
