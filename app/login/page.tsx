import LoginForm from "@/components/forms/LoginForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link href="/" className="flex items-center gap-2 self-center">
          <Image src="/logo.png" width={40} height={40} alt={"Logo"} />
          <h1>
            Job<span className="text-primary">Board</span>
          </h1>
        </Link>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
