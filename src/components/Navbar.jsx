import Link from "next/link";
import { CiUser,CiLogin } from "react-icons/ci";


const Navbar = () => {
  return (
    <div className="container mx-auto mt-3 rounded-2xl">
      <div className="p-3 flex flex-col md:flex-row justify-between items-center">
        <div className="logo">
          <h2 className="font-extrabold text-4xl text-black">SunCart</h2>
        </div>

        <div className="menu">
          <ul className="flex justify-between items-center">
            <li className="text-[#222222] font-medium text-[18px]">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="text-[#222222] font-medium text-[18px]">
              <Link href={"/"}>Product</Link>
            </li>
            <li className="ttext-[#222222] font-medium text-[18px]">
              <Link href={"/"}>Contact</Link>
            </li>
          </ul>
        </div>

        <div className="right_menu">
          <ul className="flex justify-between items-center gap-3">
            <li className="text-[#666666] font-semibold flex gap-1 items-center">
                 <CiUser size={18} />
              <Link href={"/"}>My Profile</Link>
            </li>
            <li className="text-[#666666]  font-semibold flex gap-1 items-center">
              <CiLogin size={18} /><Link href={"/"}> Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
