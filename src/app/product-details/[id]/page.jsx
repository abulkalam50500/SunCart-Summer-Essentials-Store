import { RelatedProduct, SingleProduct } from "@/lib/data";
import Image from "next/image";
import { CiStar, CiShoppingCart } from "react-icons/ci";
import { SiIlovepdf } from "react-icons/si";
import Card from "@/components/UI/Card";

const ProductDetails = async ({ params }) => {
  const { id } = await params;

  const Details = await SingleProduct(id);

  const related_product=[1,2,3];
  const RelatedProductList = await RelatedProduct(related_product);

  return (
    <div className="container mx-auto m-15">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="left-section">
          <Image
            className="rounded-2xl"
            src={Details?.image}
            width={500}
            height={500}
            alt=""
          />
        </div>
        <div className="right-section">
          <div className="flex gap-2 p-3 md:p-0 items-center">
            <CiStar size={19} color="#FCBD01" />
            <CiStar size={19} color="#FCBD01" />
            <CiStar size={19} color="#FCBD01" />
            <CiStar size={19} color="#FCBD01" />
            <CiStar size={19} color="#FCBD01" />
            <span className="text-[13px] font-semibold">{Details.rating} </span>
            <span className="text-[13px] text-[#5F6C72]">(1000 Rating)</span>
          </div>

          <h2 className="card-title p-3 md:p-0 text-[27px] text-bold">
            {Details.name}
            {Details.stock > 0 ? (
              <span className="badge badge-neutral badge-sm float-right">
                In Stock ({Details.stock})
              </span>
            ) : (
              <span className="badge badge-warning">Stock OUT</span>
            )}
          </h2>

          <div className="mt-4 flex flex-col md:flex-row justify-between items-center w-full md:w-[530px]">
            <h3 className="text-[16px] font-semibold">
              <span className="text-[#5F6C72]">Category:</span>{" "}
              {Details.category}
            </h3>
            <h3 className="text-[16px] font-semibold">
              <span className="text-[#5F6C72]">Brand:</span> {Details.brand}
            </h3>
          </div>

          <div className="description mt-4 p-3 md:p-0">
            <p className="text-[16px]">{Details.description}</p>
          </div>

          <div className="color md:mt-5 p-4 md:p-0">
            <h2 className="text-[20px] text-[#5F6C72] font-bold">
              Color: <strong className="text-black">White</strong>
            </h2>

            <div className="mt-3 flex gap-3">
              <div className="w-[50] h-[30px] bg-white-200 border-2 border-solid active: rounded-md cursor-pointer"></div>
              <div className="w-[50] h-[30px] bg-blue-200 border border-solid rounded-md cursor-pointer"></div>
              <div className="w-[50] h-[30px] bg-red-200 border border-solid rounded-md cursor-pointer"></div>
              <div className="w-[50] h-[30px] bg-yellow-200 border border-solid rounded-md cursor-pointer"></div>
            </div>
          </div>

          <div className="color md:mt-5 p-3 md:p-0">
            <h2 className="text-[20px] text-[#5F6C72] font-bold">
              Size: <strong className="text-black">XL</strong>
            </h2>

            <div className="mt-3 flex gap-3">
              <div className="w-[50] h-[30px] text-center bg-white-200 border-2 border-solid active: rounded-md cursor-pointer">
                XXL
              </div>
              <div className="w-[50] h-[30px] text-center border border-solid rounded-md cursor-pointer">
                XL
              </div>
              <div className="w-[50] h-[30px] text-center border border-solid rounded-md cursor-pointer">
                M
              </div>
              <div className="w-[50] h-[30px] text-center border border-solid rounded-md cursor-pointer">
                S
              </div>
            </div>
          </div>

          <div className="Price mt-1 md:mt-5 p-3 md:p-0">
            <h2 className="text-[25px] font-bold">
              {" "}
              <del className="text-[20px] text-[#5F6C72]">৳ 0,000</del> ৳{" "}
              {Details.price}
            </h2>
          </div>

          <div className="action-button mt-2 md:mt-8 flex gap-3 p-3 md:p-0">
            <button className="btn btn-neutral">
              <CiShoppingCart size={24} /> Add To Cart
            </button>
            <button className="btn btn-outline">
              <SiIlovepdf size={24} /> Wishlist
            </button>
          </div>
        </div>
      </div>

      <div className="mt-17">
        <h2 className="text-[34px] font-extrabold text-center md:text-left">
          Related <span className="text-yellow-500">Product</span>
        </h2>


         <div className="product-cards grid grid-cols-1 gap-4 md:grid-cols-3 mt-6">
          {
            RelatedProductList.map((item,index)=><Card key={index} item={item} />)
          }
         </div>
             


      </div>
    </div>
  );
};

export default ProductDetails;
