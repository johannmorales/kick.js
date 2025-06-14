import { WebSocket } from "ws";
import { EventEmitter } from "events";
import { ChatMessageEvent } from "../types.js";

/**
 * @param {string} chatroomId
 * @returns {EventEmitter<{message: (message: ChatMessageEvent['data']) =>void}>}
 */
const joinChatroom = (chatroomId) => {
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

export { joinChatroom };
