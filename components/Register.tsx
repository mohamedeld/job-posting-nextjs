import React from "react";
import BgColor from "./UI/BgColor";
import Link from "next/link";

const Register = () => {
  return (
    <>
      <BgColor>
        <div className="bg-white w-[450px] p-5 rounded-xl">
          <h1 className="text-3xl font-bold mb-2">SheyJobs - Login</h1>
          <hr />
          <form className="space-y-5">
            <div className="mt-7">
              <label className="mr-5">
                <input
                  type="radio"
                  className="form-radio text-indigo-600 mr-2"
                  name="role"
                  value="employee"
                />
                <span>Employee</span>
              </label>
              <label>
                <input
                  type="radio"
                  className="form-radio text-indigo-600 mr-2"
                  name="role"
                  value="employee"
                />
                <span>Employer</span>
              </label>
            </div>
            <div>
              <label htmlFor="name" className="block mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="border-solid border-2 border-gray-900  p-2 w-full rounded-xl"
              />
            </div>
            <div>
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
            <button className="bg-blue-900 text-white rounded-2xl py-4 px-8  w-full">
              Register
            </button>
            <div className="mt-4">
              Have an account?{" "}
              <Link href="/login" className="text-blue-800">
                Login
              </Link>
            </div>
          </form>
        </div>
      </BgColor>
    </>
  );
};

export default Register;
