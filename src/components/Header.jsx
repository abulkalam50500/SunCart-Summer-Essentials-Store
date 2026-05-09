import { CiMobile1,CiInstagram,CiYoutube  } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
const Header = () => {
    return (
        <div className="bg-black  p-3 ">
            <div className="container mx-auto space-y-2 sm:space-y-2  text-white/80 flex flex-col md:flex-row justify-between items-center">
                
                 <p>Welcome to SunCart – Summer Essentials Store</p>

                 <div className="flex flex-col md:flex-row justify-between items-center md:gap-3">
                       <span className="flex items-center gap-1"> <CiMobile1 /> 01858969247</span>
                       <span className="flex items-center gap-1"><MdOutlineEmail  /> abulkalam360360@gmail.com</span>
                 </div>

                 <div className="flex justify-between items-center gap-2">
                       <FaFacebookSquare size={20} />
                       <CiInstagram size={20} />
                       <CiYoutube size={20} />
                 </div>

            </div>
        </div>
    );
};

export default Header;