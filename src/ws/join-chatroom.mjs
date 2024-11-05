import { WebSocket } from "ws";
import { EventEmitter } from "events";
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

export const joinChatroom = (chatroomId) => {
  /**
   * @type {EventEmitter<{message: (message: ChatMessageEvent['data']) =>void}>}
   */
  const ee = new EventEmitter();
  const baseUrl = "wss://ws-us2.pusher.com/app/32cbd69e4b950bf97679";
  const urlParams = new URLSearchParams({
    protocol: "7",
    client: "js",
    version: "7.4.0",
    flash: "false",
  });
  const url = `${baseUrl}?${urlParams.toString()}`;

  const socket = new WebSocket(url);
  socket.on("open", () => {
    const connect = JSON.stringify({
      event: "pusher:subscribe",
      data: { auth: "", channel: `chatrooms.${chatroomId}.v2` },
    });
    socket.send(connect);
  });
  socket.on("message", (data) => {
    try {
      const asString = data.toString();
      /**
       * @type {ChatMessageEvent}
       */
      const event = JSON.parse(asString);
      event.data = JSON.parse(event.data);

      if (event.event !== "App\\Events\\ChatMessageEvent") {
        return;
      }
      ee.emit("message", event.data);
    } catch (er) {
      console.error(er);
    }
  });

  return ee;
};
