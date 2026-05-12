import { IoLocationSharp } from "react-icons/io5";
import { CiMobile1, CiInstagram, CiYoutube } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#191C1F] pt-5">
      <div className="container mx-auto p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          <div className="contact-info">
            <div className="logo">
              <h2 className="font-extrabold text-4xl text-white">SunCart</h2>
            </div>
            <p className="text-white">
              Discover everything you need to make this summer brighter, cooler,
              and more stylish with our latest seasonal collection.
            </p>

            <h3 className="text-[15px] mt-5 flex gap-1 items-center text-[#77878F]">
              <IoLocationSharp /> 105/A MashAllah Villa, Rayerbag,Sonir-Akhr,
              <br></br>Dhaka,Bangladesh
            </h3>
            <h3 className="text-[15px] mt-2   text-[#77878F]">
              <strong className="">Phone</strong> <br /> 01858969247
            </h3>
          </div>
          <div className="social-link">
            <h2 className="font-medium text-white text-[20px]">Social Links</h2>
            <div className="flex  items-center gap-2 mt-3">
              <FaFacebookSquare color="white" size={25} />
              <CiInstagram color="white" size={25} />
              <CiYoutube size={25} color="white" />
            </div>
          </div>
          <div className="Privacy-policy">
            <h2 className="font-medium text-white text-[20px]">
              Privacy policy
            </h2>

               <ul className="mt-3 text-white">
                <li><Link href={'/'}>Terms and Condition</Link></li>
                <li><Link href={'/'}>Privacy policy</Link></li>
                <li><Link href={'/'}>Refund Policy</Link></li>
                <li><Link href={'/'}>Contact Us</Link></li>
               </ul>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
