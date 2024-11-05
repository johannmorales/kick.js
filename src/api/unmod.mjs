import { http } from "./_common.mjs";

export async function unmod(authorizationToken, channel, username) {
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
