import Input from "@/components/Input";
import Link from "next/link";
import React from "react";

function Login() {
  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-screen drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]">
        <h2 className="font-bold text-3xl my-2">Login</h2>
        <small className="italic">Glad to have you back</small>
        <form action="" className="space-y-4">
          <div className="w-full">
            <Input label="Email" type="email" />
            <Input label="Password" type="password" />
          </div>

          <button className="btn w-full bg-orange-400 font-bold text-base-100">
            Login
          </button>
          <small className="opacity-50">
            Don't have an account ?{" "}
            <Link
              className="font-bold hover:text-orange-400 transition"
              href={"/signup"}
            >
              Sign Up
            </Link>
          </small>
        </form>
      </section>
    </>
  );
}

export default Login;
