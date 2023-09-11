"use client";
import React, { useState } from "react";
import BgColor from "@/components/UI/BgColor";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();
  const [selectEmplyoee, setSelectEmployee] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const formData = {
        selectEmplyoee,
        email,
        password,
      };
      const response = await axios.post("/api/users/login", formData);
      toast.success(`${response.data.message}`);
      router.push("/");
    } catch (error: any) {
      toast.error(`${error.response.data.message}`);
    }
  };
  return (
    <BgColor>
      <ToastContainer />
      <div className="bg-white w-[400px] p-5 rounded-xl">
        <h1 className="text-3xl font-bold mb-2">SheyJobs - Login</h1>
        <hr />
        <form className="mt-10" onSubmit={submitHandler}>
          <div className="mt-7">
            <label className="mr-5">
              <input
                type="radio"
                className="form-radio text-indigo-600 mr-2"
                name="role"
                value="employee"
                checked={selectEmplyoee === "employee"}
                onChange={(e) => setSelectEmployee(e.target.value)}
              />
              <span>Employee</span>
            </label>
            <label>
              <input
                type="radio"
                className="form-radio text-indigo-600 mr-2"
                name="role"
                value="employer"
                checked={selectEmplyoee === "employer"}
                onChange={(e) => setSelectEmployee(e.target.value)}
              />
              <span>Employer</span>
            </label>
          </div>
          <div className="my-2">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border-solid border-2 border-gray-900  p-2 w-full rounded-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

export default Page;
