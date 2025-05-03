const { http } = require("./_common.js");

async function userWatchLivestream(authorizationToken, channelId, channelName) {
  await http(`https://kick.com/api/v2/user/events`, {
    headers: {
      authorization: authorizationToken,
      "content-type": "application/json",
      accept: "application/json",
      "accept-language": "en-US,en;q=0.9",
      "cache-control": "max-age=0",
      cluster: "v2",
      "content-type": "application/json",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      Referer: `https://kick.com/${channelName}`,
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
    body: `[{"name":"tracking.user.watch.livestream","channel_id":${channelId}}]`,
    method: "POST",
  });
}

module.exports = { userWatchLivestream };
