const { http } = require("./_common.js");

/**
 *
 * @param {string} authorizationToken
 * @param {string} channelId
 * @param {import("../ws/join-chatroom.js").ChatMessageEvent['data']} originalMessage
 * @param {string} message
 */
async function reply(authorizationToken, channelId, originalMessage, message) {
  const body = {
    content: message,
    type: "reply",
    metadata: {
      original_message: {
        id: originalMessage.id,
        content: originalMessage.content,
      },
      original_sender: {
        id: originalMessage.sender.id,
        username: originalMessage.sender.username,
      },
    },
  };
  await http(`https://kick.com/api/v2/messages/send/${channelId}`, {
    headers: {
      authorization: authorizationToken,
    },
    referrerPolicy: "strict-origin-when-cross-origin",
    body: JSON.stringify(body),
    method: "POST",
  });
}

module.exports = { reply };
