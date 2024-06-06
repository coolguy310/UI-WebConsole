import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { fetchSession } from "@/utils/auth.ts";
import { redirect } from "@/utils/common.ts";

export async function handler(req: Request, ctx: MiddlewareHandlerContext) {
  const cookie = req.headers.get("cookie") as string;
  const sessionResp = await fetchSession(cookie);
  if (sessionResp?.status === 401) {
    return redirect("/auth/login", 308);
  }
  const resp = await ctx.next();
  return resp;
}
