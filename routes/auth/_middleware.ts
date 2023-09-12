import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { fetchSession } from "@/utils/auth.ts";
import { redirect } from "@/utils/common.ts";

export async function handler(req: Request, ctx: MiddlewareHandlerContext) {
  const sessionResp = await fetchSession(req.headers.get("cookie") as string);
  const sessionData = await sessionResp.json();
  ctx.state.session = sessionData;
  const verification = req.url.includes("/auth/verification");
  if (sessionResp?.status === 200 && req.url.includes("/auth/logout")) {
    const resp = await ctx.next();
    return resp;
  }
  if (sessionResp?.status === 200 && !verification) {
    return redirect("/console", 308);
  }

  const resp = await ctx.next();
  return resp;
}
