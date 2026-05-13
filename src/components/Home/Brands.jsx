import { getBrands } from "@/lib/data";
import { Button, Card, CloseButton } from "@heroui/react";
import Image from "next/image";

const Brands = async () => {
  const brands = await getBrands();

  return (
    <div className="container mx-auto mt-15">
      <h2 className="text-[34px] font-extrabold text-center md:text-left">
        Top <span className="text-yellow-500">Brands</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-3 place-items-center mt-3 items-center ">
        {brands?.map((item, index) => (
          <Card key={index} className=" items-stretch p-3">
            <div className="relative h-[170px] flex items-center justify-center  w-full overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
              <Image
                className="p-3 md:p-0"
                src={item.image}
                width={300}
                height={300}
                alt=""
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Brands;
