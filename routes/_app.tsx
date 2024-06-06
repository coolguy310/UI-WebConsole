import { defineApp } from "$fresh/src/server/defines.ts";

export default defineApp((_, ctx) => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ui-webconsole</title>
      </head>
      <body>
        <ctx.Component />
      </body>
    </html>
  );
});
