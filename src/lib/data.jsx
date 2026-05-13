export const getProduct = async()=>{

  try {
      const res = await fetch('http://tellus.itsoft-bd.com/sun-cart-product');
    const data = await res.json();
    return data;
  } catch (error) {
    
  }

}


export const getBrands = async()=>{

   try {
     const res = await fetch('https://tellus.itsoft-bd.com/brands.json');
    const data = await res.json();
    return data;
   } catch (error) {
    
   }

}

export const SingleProduct = async(id)=>{

    try {
        const res = await fetch('http://tellus.itsoft-bd.com/sun-cart-product');
    const data = await res.json();
    const findItem = data.find((item)=>item.id==id);

    return findItem;
    } catch (error) {
        
    }

}

export const RelatedProduct = async(id)=>{


    try {
        const res = await fetch('http://tellus.itsoft-bd.com/sun-cart-product');
    const data = await res.json();
    const findItem = data.filter((item)=>id.includes(item.id));

    return findItem;
    } catch (error) {
        
    }

}