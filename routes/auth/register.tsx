import AuthRegisterForm from "@/islands/form-auth-register.tsx";

export default function AuthLogin() {
  return (
    <>
      <h1 className="text-2xl font-bold text-center">Create Account</h1>
      <AuthRegisterForm />
      <div className="text-center text-stroke text-sm">
        <div className="mt-3">
          <span>Already have an account? </span>
          <a href="/auth/login" className="font-semibold text-accent">
            Login
          </a>
        </div>
      </div>
    </>
  );
}
