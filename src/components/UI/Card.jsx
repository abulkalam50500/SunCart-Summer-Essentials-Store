import Image from 'next/image';
import React from 'react';
import { CiStar } from "react-icons/ci";

const Card = ({item}) => {
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <Image src={item.image} alt='' width={300} height={300} />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-[22px] text-bold">
              {item.name}
              {
                item.stock>0 ? <span className="badge badge-neutral badge-sm float-right">In Stock ({item.stock})</span> : <span className="badge badge-warning">Stock OUT</span>
              }
              
            </h2>
            <div className="flex gap-2 items-center">
              <CiStar size={19} color="#FCBD01" />
              <CiStar size={19} color="#FCBD01" />
              <CiStar size={19} color="#FCBD01" />
              <CiStar size={19} color="#FCBD01" />
              <CiStar size={19} color="#FCBD01" />
              <span className="text-[13px] font-semibold">{item.rating} </span>
              <span className="text-[13px] text-[#5F6C72]">(1000 Rating)</span>
            </div>

            <h2 className="text-xl font-bold">৳ {item.price}</h2>

            <div className="flex gap-3">
              <button className="btn">Buy Now</button>
              <button className="btn btn-outline">View Detail</button>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Card;