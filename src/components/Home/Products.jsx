import React from "react";

import { getProduct } from "../../lib/data";
import Card from "../UI/Card";
const Products = async () => {
  const products = await getProduct();

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-[32px] font-extrabold text-center sm:text-left">Popular Products</h2>
      <p className="text-gray-600 mt-2 text-center sm:text-left">
        {" "}
        Discover our most loved products, chosen by customers for their quality
        and style.
      </p>

      <div className="product-cards grid grid-cols-1 md:grid-cols-3">
         {
            products.map((item,index)=><Card key={index} item={item} />)
         }
      </div>
    </div>
  );
};

export default Products;
