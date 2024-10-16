import { http } from "./_common.js";

export async function mod(authorizationToken, channel, username) {
  await http(
    `https://kick.com/api/internal/v1/channels/${channel}/community/moderators`,
    {
      headers: {
        authorization: authorizationToken,
      },
      body: {
        username,
      },
      method: "POST",
    }
  );
}
