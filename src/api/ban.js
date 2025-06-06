const { http } = require("./_common.js");

async function ban(authorizationToken, channel, username) {
  const body = {
    banned_username: username,
    duration: minutes ?? 0,
    permanent: duration === undefined,
  };
  await http(`https://kick.com/api/v2/channels/${channel}/bans`, {
    headers: {
      authorization: authorizationToken,
    },
    body: JSON.stringify(body),
    method: "POST",
  });
}

module.exports = { ban };
