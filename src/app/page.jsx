import Image from "next/image";
import HeroSection from "@/components/Home/Hero";
import Products from "@/components/Home/Products";
import Tips from "@/components/Home/Tips";

export default function Home() {
  return (
    <div >
       {/* slider  */}
       <HeroSection/>
       <Products/>
       <Tips/>
    </div>
  );
}
