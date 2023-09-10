import React from "react";
import BgColor from "./UI/BgColor";
import Link from "next/link";

const Login = () => {
  return (
    <BgColor>
      <div className="bg-white w-[400px] p-5 rounded-xl">
        <h1 className="text-3xl font-bold mb-2">SheyJobs - Login</h1>
        <hr />
        <form className="mt-10">
          <div className="my-2">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border-solid border-2 border-gray-900  p-2 w-full rounded-xl"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border-solid border-2 border-gray-900 rounded-xl p-2 w-full"
            />
          </div>
          <button className="bg-blue-900 text-white rounded-2xl py-4 px-8 mt-10 w-full">
            Login
          </button>
          <div className="mt-4">
            Don't have an account?{" "}
            <Link href="/register" className="text-blue-800">
              Register
            </Link>
          </div>
        </form>
      </div>
    </BgColor>
  );
};

export default Login;
