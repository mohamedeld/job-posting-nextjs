"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";
const Page = () => {
  const router = useRouter();
  const handleClick = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("logout successfully");
      router.push("/login");
    } catch (error: any) {
      toast.error(`${error.message}`);
    }
  };
  return (
    <div>
      <ToastContainer />
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

export default Page;
