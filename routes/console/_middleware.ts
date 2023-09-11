import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { Config } from "@/packages/kratos-auth/config.ts";

export async function handler(req: Request, ctx: MiddlewareHandlerContext) {
  const sessionResp = await fetch(`${Config.auth.publicURL}/sessions/whoami`, {
    credentials: "include",
    headers: {
      accept: "application/json",
      cookie: req.headers.get("cookie") as string,
    },
  });

  if (!sessionResp.ok) {
    const headers = new Headers();
    headers.set("location", "/auth/login");
    return new Response(null, {
      status: 308,
      headers,
    });
  }

  const resp = await ctx.next();
  return resp;
}
