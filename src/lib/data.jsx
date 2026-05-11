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