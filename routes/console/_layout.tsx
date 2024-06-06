import { defineLayout } from "$fresh/src/server/defines.ts";
import { RouteConfig } from "$fresh/server.ts";
import { Sidebar } from "@/components/ui/sidebar/index.tsx";
import { Navbar } from "./(_components)/navbar.tsx";

export default defineLayout((_, { Component, url }) => {
  return (
    <div className="bg-dark min-h-screen">
      <Sidebar location={url} />
      <Navbar />
      <main className={"ml-64 p-8 text-white flex flex-col space-y-"}>
        <Component />
      </main>
    </div>
  );
});

export const config: RouteConfig = {
  skipInheritedLayouts: true,
};
