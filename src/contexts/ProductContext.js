import React, { createContext, useEffect, useState } from 'react';

//creamos el context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {

  //product state
  const [product, setProduct] = useState([]);

  //feching APIFAKESTORE product
  useEffect(() => {
    const fechingDataProduct = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProduct(data);
      console.log(data)
    }
    fechingDataProduct();
  }, [])


  return (
    <ProductContext.Provider value={{ product }}>
      {children}
    </ProductContext.Provider>
  )
};

export default ProductProvider;
