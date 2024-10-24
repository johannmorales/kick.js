/**
 * @param {string} url
 * @param {RequestInit?} init
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
