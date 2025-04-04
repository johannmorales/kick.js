/**
 * @param {string} url
 * @param {RequestInit?} init
 */
async function http(url, init) {
  const response = await fetch(url, {
    body: null,
    method: "GET",
    ...(init ?? {}),
    headers: {
      headers: {
        accept: "*/*",
        "cache-control": "max-age=0",
        "accept-language": "en-US,en;q=0.9",
        priority: "u=1, i",
        "sec-ch-ua": '"Not A(Brand";v="8", "Chromium";v="132"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        ...(init?.headers ?? {}),
      },
      ...(init?.headers ?? {}),
    },
  });
  return response.json();
}

module.exports = { http };
