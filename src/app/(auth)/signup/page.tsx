import Input from "@/components/Input";
import Link from "next/link";
import React from "react";

function SignUp() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="font-bold text-3xl">Sign Up</h2>
      <small className="italic">Let's start with some facts about you</small>
      <form action="" className="space-y-4">
        <div className="grid grid-cols-2">
          <Input label="First Name" />
          <Input label="Last Name" />
        </div>
        <div>
          <Input label="Date of Birth" type="date" />
          <Input label="Address/Location" />
          <Input label="Email" type="email" />
          <Input label="Password" type="password" />
        </div>
        <div className="grid grid-cols-2">
          <Input label="Gender" />

          <Input label="Phone Number" type="tel" placeholder="123-456-7890" />
        </div>
        <button className="btn w-full bg-orange-400 font-bold text-base-100">
          Sign Up
        </button>
        <small className="opacity-50">
          Already have an account ?{" "}
          <Link
            className="font-bold hover:text-orange-400 transition"
            href={"/login"}
          >
            Login
          </Link>
        </small>
      </form>
    </section>
  );
}

export default SignUp;
