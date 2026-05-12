import Image from "next/image";
import HeroSection from "@/components/Home/Hero";
import Products from "@/components/Home/Products";
import Tips from "@/components/Home/Tips";
import Brands from "@/components/Home/Brands";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div >
       {/* slider  */}
       <HeroSection/>
       <Products/>
       <Tips/>
       <Brands/>
       


    </div>
  );
}
