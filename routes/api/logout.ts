import { Handlers } from "$fresh/server.ts";
import { Kratos } from "@/packages/kratos-auth/auth.ts";

export const handler: Handlers = {
  async POST(event) {
    const resp = await Kratos.createBrowserLogoutFlow.fn(
      event.headers.get("cookie") as string
    );
    if (!resp.logout_token) {
      return Response.redirect(event.url);
    }

    return Response.redirect(resp.logout_url);
  },
};
