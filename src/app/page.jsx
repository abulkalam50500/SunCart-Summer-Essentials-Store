import HeroSection from "@/components/home/Hero";
import Products from "@/components/home/Products";
import Tips from "@/components/home/Tips";
import Brands from "@/components/home/Brands";

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
