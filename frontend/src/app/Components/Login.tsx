"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
function Loginform() {
  const router = useRouter();
  async function handlesubmit(e: any) {
    e.preventDefault();
    const loginformdata = new FormData(e.target);
    console.log(loginformdata);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
        {
          username: loginformdata.get("username"),
          email: loginformdata.get("email"),
          password: loginformdata.get("password"),
        },
        { withCredentials: true },
      );
      console.log("login successfull");
      console.log(response);
      router.push("/Feed");
    } catch (error: any) {
      console.error("login failed");
      console.error(error.response);
    }
  }

  return (
    <div className=" bg-black min-h-screen border flex flex-col items-center justify-center p-4 ">
      <span className="text-white font-bold ">Login</span>
      <form
        onSubmit={handlesubmit}
        className="flex flex-col items-center  p-4 gap-4 "
      >
        <input
          className=" text-white p-2 border rounded-sm "
          type="text"
          name="username"
          placeholder="Username"
        />
        <input
          className=" text-white p-2 border rounded-sm "
          type="text"
          name="email"
          placeholder="Email"
        />
        <input
          className=" text-white p-2 border rounded-sm "
          type="text"
          name="password"
          placeholder="Password"
        />
        <button
          className=" transition hover:border-blue-600 text-white p-2 border rounded-sm"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
export default Loginform;
