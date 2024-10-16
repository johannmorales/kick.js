/**
 *
 * @param {string} url
 */
export async function get(url) {
  const response = await fetch(url, {
    headers: {
      accept: "application/json",
    },
    body: null,
    method: "GET",
  });

  return response.json();
}

/**
 * @param {string} url
 * @param {RequestInit?} init
 * @returns
 */
export async function http(url, init) {
  const response = await fetch(url, {
    body: null,
    method: "GET",
    ...(init ?? {}),
    headers: {
      accept: "application/json",
      "cache-control": "max-age=0",
      ...(init?.headers ?? {}),
    },
  });
  return response.json();
}
