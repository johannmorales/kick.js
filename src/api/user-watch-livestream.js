const { http } = require("./_common.js");

async function userWatchLivestream(authorizationToken, channelId, channelName) {
  await http(`https://kick.com/api/v2/user/events`, {
    headers: {
      authorization: authorizationToken,
      Referer: `https://kick.com/${channelName}`,
      "accept": "application/json",
      "accept-language": "en-US,en;q=0.9",
      "authorization": "Bearer 207925072|GNDiQKOt7mhvLOxA07ZfUYRycccDeqzGDCRRR7qO",
      "cache-control": "max-age=0",
      "cluster": "v2",
      "content-type": "application/json",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Google Chrome\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    body: `[{"name":"tracking.user.watch.livestream","channel_id":${channelId}}]`,
    method: "POST",
  });
}

module.exports = { userWatchLivestream };


fetch("https://kick.com/api/v2/user/events", {
  "headers": {

  },
  "body": "[{\"name\":\"tracking.user.watch.livestream\",\"channel_id\":21224099}]",
  "method": "POST"
});
