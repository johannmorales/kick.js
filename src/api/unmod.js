const { http } = require("./_common.js");

async function unmod(authorizationToken, channel, username) {
  await http(
    `https://kick.com/api/internal/v1/channels/${channel}/community/moderators/${username}`,
    {
      headers: {
        authorization: authorizationToken,
      },
      method: "DELETE",
    }
  );
}

module.exports = { unmod };
