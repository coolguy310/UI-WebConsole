import { Config } from "@/packages/kratos-auth/config.ts";

async function fetchSession(cookie: string) {
  const sessionResp = await fetch(`${Config.auth.publicURL}/sessions/whoami`, {
    credentials: "include",
    headers: {
      accept: "application/json",
      cookie,
    },
  });

  return sessionResp;
}

export { fetchSession };
