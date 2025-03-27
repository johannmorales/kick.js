const { http } = require("./_common.js");

async function chat(authorizationToken, channelId, message) {
  await http(`https://kick.com/api/v2/messages/send/${channelId}`, {
    headers: {
      authorization: authorizationToken,
      "content-type": "application/json",
    },
    body: `{"content":"${message}","type":"message"}`,
    method: "POST",
  });
}

module.exports = { chat };
