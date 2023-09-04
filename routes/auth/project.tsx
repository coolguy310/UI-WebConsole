import { AuthCreateProjectForm } from "@/components/common/forms/auth/project.tsx";
import { AuthLayout } from "@/components/layouts/auth.tsx";

export default function AuthProject() {
  return (
    <AuthLayout>
      <AuthCreateProjectForm />
    </AuthLayout>
  );
}
