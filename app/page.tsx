import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { cookies } from "next/headers";
export async function getUser() {
  try {
    const token = cookies().get("token");
    const response = await axios.get(
      "http://localhost:3000/api/users/currentuser",
      {
        headers: {
          Cookie: `token=${token?.value}`,
        },
      }
    );
    return response.data.data;
  } catch (error: any) {
    console.log(error.message);
  }
}

export default async function Home() {
  const currentUser: any = await getUser();
  return <main>current user name {currentUser && currentUser.name}</main>;
}
