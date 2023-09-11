import { defineLayout } from "$fresh/src/server/defines.ts";
import { ConsoleLayout } from "@/components/layouts/console.tsx";
import { RouteConfig } from "$fresh/server.ts";

export default defineLayout((_, { Component, url }) => {
  return (
    <ConsoleLayout location={url} className="flex flex-col space-y-8">
      <Component />
    </ConsoleLayout>
  );
});

export const config: RouteConfig = {
  skipInheritedLayouts: true,
};
