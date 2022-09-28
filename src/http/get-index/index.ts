import { HttpRequest } from "@architect/functions";
// learn more about HTTP functions here: https://arc.codes/http
export async function handler(req: HttpRequest) {
  return {
    statusCode: 200,
    headers: {
      "cache-control":
        "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0",
      "content-type": "text/html; charset=utf8",
    },
    body: `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <link rel="shortcut icon" type="image/ico" href="/src/assets/favicon.ico" />
    <title>Solid App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>

    <script src="../../index.tsx" type="module"></script>
  </body>
</html>

`,
  };
}
