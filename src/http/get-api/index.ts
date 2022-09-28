import { HttpRequest } from "@architect/functions";
// learn more about HTTP functions here: https://arc.codes/http
export async function handler(req: HttpRequest) {
  return {
    statusCode: 200,
    cors: true,
    headers: {
      "cache-control":
        "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0",
      "content-type": "text/json; charset=utf8",
    },
    body: JSON.stringify({ user: { name: 'vamshi' } }),
  };
}
