import Image from "next/image";
import Slider from "@/assets/slider.webp";
import DisImg from "@/assets/imgone.jpg";
import fashonImage from "@/assets/fashon02.jpg";
import fashonTwo from "@/assets/imgfashion.jpeg";
import fashonThree from "@/assets/fashoin_five.webp";
import { CiDeliveryTruck } from "react-icons/ci";
import { TbTruckReturn } from "react-icons/tb";
import { RiSecurePaymentFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";

const HeroSection = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image src={Slider} width={500} className="rounded-md" />
          <div>
            <h1 className="text-[33px] font-semibold">
              Best Deal Online on smart watches
            </h1>
            <h1 className="text-[60px] font-bold">LATEST NIKE SHOES</h1>
            <h1 className="text-[32px] font-semibold">UP to 80% OFF</h1>

            <p className="py-6">
              Discover everything you need to make this summer brighter, cooler,
              and more stylish with our latest seasonal collection.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Image
                src={DisImg}
                className="rounded-md"
                width={150}
                height={150}
              />
              <Image
                src={fashonImage}
                className="rounded-md"
                width={150}
                height={150}
              />
              <Image
                src={fashonTwo}
                className="rounded-md"
                width={150}
                height={150}
              />
              <Image
                src={fashonThree}
                className="rounded-md"
                width={150}
                height={150}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 items-baseline mt-6">
              <div className="border  border-gray-400 p-2 rounded-md ">
                <CiDeliveryTruck className="mx-auto text-orange-500 mb-3" size={33} />
                <h2 className="text-[20px] text-center">Fasted Delivery</h2>
                <p className="text-center text-[14px]">Delivery in 24/H</p>
              </div>
              <div className="border  border-gray-400 p-2 rounded-md">
                <TbTruckReturn className="mx-auto text-green-500 mb-3" size={33} />
                <h2 className="text-[20px] text-center">24 Hours Return</h2>
                <p className="text-center text-[14px]">money-back guarantee</p>
              </div>
              <div className="border border-gray-400 p-2 rounded-md">
                <RiSecurePaymentFill className="mx-auto text-blue-500 mb-3" size={33} />
                <h2 className="text-[20px] text-center">Secure Payment</h2>
                <p className="text-center text-[14px]">Your money is safe</p>
              </div>
              <div className="border border-gray-400 p-2 rounded-md">
                <BiSupport className="mx-auto text-purple-500 mb-3" size={33} />
                <h2 className="text-[20px] text-center">Support 24/7</h2>
                <p className="text-center text-[14px]">Live contact/message</p>
              </div>
            </div>

            <div className="mt-5 space-x-2">
              <button className="btn btn-lg bg-purple-300 text-black border-[#e5e5e5]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 2l3 7h9l-1.5 9h-11z" />
                  <circle cx="9" cy="20" r="1" />
                  <circle cx="18" cy="20" r="1" />
                </svg>
                Shop Now
              </button>
              <button className="btn btn-lg bg-white text-black border-[#e5e5e5]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.6a2 2 0 0 1-.45 2.11L8.1 9.91a16 16 0 0 0 6 6l1.48-1.14a2 2 0 0 1 2.11-.45c.83.3 1.7.51 2.6.63A2 2 0 0 1 22 16.92z" />
                </svg>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
