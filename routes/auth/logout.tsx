import { defineRoute } from "$fresh/src/server/defines.ts";
import { Button } from "@/components/ui/button/index.tsx";
import { Handlers } from "$fresh/server.ts";
import { Kratos } from "@/packages/kratos-auth/auth.ts";
import { redirect } from "@/utils/common.ts";

export const handler: Handlers = {
  async POST(event, ctx) {
    try {
      const resp = await Kratos.createBrowserLogoutFlow.fn(
        event.headers.get("cookie") as string
      );
      if (!resp.logout_token) {
        return Response.redirect("/console");
      }
      ctx.state.session = null;
      return Response.redirect(resp.logout_url);
    } catch (error) {
      console.log(error);
      return redirect("/console", 308);
    }
  },
};
export default defineRoute((_, ctx) => {
  const session = (ctx.state as any)?.session;
  if (!session || session?.error) {
    return redirect("/auth/login", 308);
  }

  return (
    <div>
      <p class="text-center text-lg">Are you sure want to logout ?</p>
      <div class="flex items-center gap-4 mt-4 justify-center">
        <Button variant="danger" href="/">
          No
        </Button>
        <form method="post">
          <Button type="submit" variant="primary">
            Yes
          </Button>
        </form>
      </div>
    </div>
  );
});
