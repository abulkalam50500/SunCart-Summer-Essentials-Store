'use client'

import { useState } from "react";


const PriceRange = () => {
      const  [price,setPrice] = useState(5000);
    return (
        <div className="bg-white p-5 rounded-xl shadow-md w-full max-w-sm">

      <h2 className="text-lg font-semibold mb-4">
        Filter by Price
      </h2>

      <input
        type="range"
        min={0}
        max={10000}
        step={100}
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="range range-primary"
      />

      <div className="flex justify-between text-sm mt-2 text-gray-500">
        <span>৳0</span>
        <span>৳10000</span>
      </div>

      <div className="mt-4">
        <p className="font-medium text-primary">
          Selected Price: ৳{price}
        </p>
      </div>

    </div>
    );
};

export default PriceRange;