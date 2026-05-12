export const getProduct = async()=>{

    const res = await fetch('https://tellus.itsoft-bd.com/proudct.json');
    const data = await res.json();
    return data;

}


export const getBrands = async()=>{

    const res = await fetch('https://tellus.itsoft-bd.com/brands.json');
    const data = await res.json();
    return data;

}

export const SingleProduct = async(id)=>{

    const res = await fetch('https://tellus.itsoft-bd.com/proudct.json');
    const data = await res.json();
    const findItem = data.find((item)=>item.id==id);

    return findItem;

}

export const RelatedProduct = async(id)=>{


    const res = await fetch('https://tellus.itsoft-bd.com/proudct.json');
    const data = await res.json();
    const findItem = data.filter((item)=>id.includes(item.id));

    return findItem;

}