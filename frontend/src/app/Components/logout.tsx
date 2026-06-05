"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
function LogoutComponent() {
  const router = useRouter();
  async function handlelogout() {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`,
        {},
        { withCredentials: true },
      );
      console.log("User logout successfully");
      console.log(response);
      router.push("/");
    } catch (error: any) {
      console.error("Logout failed");
      console.error(error.response);
    }
  }

  return (
    <div>
      <button onClick={handlelogout} className="border p-3">
        Logout
      </button>
    </div>
  );
}
export default LogoutComponent;
