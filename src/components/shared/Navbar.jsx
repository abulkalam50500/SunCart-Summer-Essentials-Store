"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CiUser, CiLogin, CiLogout } from "react-icons/ci";
import { Bounce, toast } from "react-toastify";

const Navbar = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  const HandleSignOut = async () => {
    const {data:logout,error} = await authClient.signOut();

    if(logout?.success){
    toast.success(`🦄 Successfully Logout`, {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
router.push("/");
    }
   
  };

  return (
    <div className="container mx-auto mt-3 rounded-2xl">
      <div className="p-3 flex flex-col md:flex-row justify-between items-center">
        <div className="logo">
          <Link href={"/"}>
            <h2 className="font-extrabold text-4xl text-black">SunCart</h2>
          </Link>
        </div>

        <div className="menu">
          <ul className="flex justify-between items-center">
            <li className="text-[#222222] font-medium text-[18px]">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="text-[#222222] font-medium text-[18px]">
              <Link href={"/product"}>Product</Link>
            </li>
            <li className="ttext-[#222222] font-medium text-[18px]">
              <Link href={"/"}>Contact</Link>
            </li>
          </ul>
        </div>

        <div className="right_menu">
          <ul className="flex justify-between items-center gap-3">
            {isPending ? (
              "Loading...."
            ) : user ? (
              <>
                <li className="text-[#666666] font-semibold flex gap-1 items-center">
                  Hi,{user?.name}
                  <CiUser size={18} />
                  <Link href={"/profile"}>My Profile</Link>
                  <button
                    className="flex items-center gap=1"
                    onClick={() => HandleSignOut()}
                  >
                    {" "}
                    <CiLogout /> Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="text-[#666666]  font-semibold flex gap-1 items-center">
                  <CiLogin size={18} />
                  <Link href={"/registration"}> Registration</Link>
                </li>
                <li className="text-[#666666]  font-semibold flex gap-1 items-center">
                  <CiLogin size={18} />
                  <Link href={"/login"}> Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
