import { getProduct } from "@/lib/data";
import Card from "@/components/UI/Card";
import PriceRange from "@/components/UI/PriceRange";
const ProductPage = async () => {


  
    
  const products = await getProduct();

  return (
    <div className="mt-19 container mx-auto">
      <div className="product-cards grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-3">
        <div className="product-filter">
          <h2 className="text-[23px] font-bold text-center sm:text-left">
            Filter
          </h2>
          <div className="join w-full mt-5 p-3 ">
            <div>
              <label className="input validator join-item">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input type="email" placeholder="Search..." required />
              </label>
              <div className="validator-hint hidden">Search</div>
            </div>
            <button className="btn btn-active join-item">Search</button>
          </div>

             <PriceRange   />

          <fieldset className="fieldset bg-base-100 border-base-300 mt-7 rounded-box w-full border p-4">
            <legend className="fieldset-legend text-[19px]">Categories</legend>
            <label className="label">
              <input type="checkbox" defaultChecked className="checkbox" />
              Accessories
            </label>
            <label className="label">
              <input type="checkbox"  className="checkbox" />
              Electronics
            </label>
            <label className="label">
              <input type="checkbox"  className="checkbox" />
              Wearables
            </label>
            <label className="label">
              <input type="checkbox"  className="checkbox" />
              Fashion
            </label>
            <label className="label">
              <input type="checkbox"  className="checkbox" />
              Men's Fashion
            </label>
          </fieldset>

          <fieldset className="fieldset bg-base-100 border-base-300 mt-7 rounded-box w-full border p-4">
            <legend className="fieldset-legend text-[19px]">Brands</legend>
            <label className="label">
              <input type="checkbox" defaultChecked className="checkbox" />
              SunShade
            </label>
            <label className="label">
              <input type="checkbox"  className="checkbox" />
              SoundMax
            </label>
            <label className="label">
              <input type="checkbox"  className="checkbox" />
              FitPro
            </label>
            <label className="label">
              <input type="checkbox"  className="checkbox" />
              GameTech
            </label>
            <label className="label">
              <input type="checkbox"  className="checkbox" />
              WalkEasy
            </label>
          </fieldset>
        </div>
        <div className="product-list">
          <div className="product-cards grid grid-cols-1 gap-4 md:grid-cols-3 mt-6">
            {products.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
