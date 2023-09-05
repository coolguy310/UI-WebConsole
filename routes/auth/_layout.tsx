import { LayoutProps } from "$fresh/server.ts";
import { AuthLayout } from "@/components/layouts/auth.tsx";

export default function LandingPageLayout({ Component }: LayoutProps) {
  return (
    <AuthLayout>
      <Component />
    </AuthLayout>
  );
}
