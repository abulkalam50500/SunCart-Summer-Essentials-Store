import Image from "next/image";
import HeroSection from "@/components/Home/Hero";
import Products from "@/components/Home/Products";

export default function Home() {
  return (
    <div >
       {/* slider  */}
       <HeroSection/>
       <Products/>
    </div>
  );
}
