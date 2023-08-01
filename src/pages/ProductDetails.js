import React, { useContext } from 'react';
//import use Params
import { useParams } from 'react-router-dom';
//import cart context
import { CartContext } from '../contexts/CartContext';
//import product context
import { ProductContext } from '../contexts/ProductContext';

const ProductDetails = () => {
  //get the  product id from the url  
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { product } = useContext(ProductContext);
  //get the single product based on the id
  const products = product.find(item => item.id === parseInt(id));

  if (!products) {
    return (
      <section className='h-screen flex justify-center items-center'>
        <p>Loading...</p>
      </section>
    )
  }
  //destructuring products
  const { title, image, price, description } = products;

  return (
    <section className='h-screen pt-32 pb-12 lg:py-32 flex items-center'>
      <div className='container mx-auto'>
        {/*image & text wrapper*/}
        <div className='flex flex-col items-center lg:flex-row'>
          {/*image*/}
          <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
            <img className='max-w-[200px] lg:max-w-sm' src={image} alt={title} />
          </div>
          {/*text*/}
          <div className='flex-1 text-center lg:text-left '>
            <h2 className='text-4xl lg:text-5xl font-bold mb-2 max-w-[450px] mx-auto lg:mx-0'>{title}</h2>
            <div className='text-gray-500 text-xl font-medium py-4'>
              $ {price}
            </div>
            <p className='mb-8 text-gray-500'>{description}</p>
            <button onClick={() => addToCart(products, products.id)} className='bg-primary py-4 px-8 text-white'>Add to cart</button>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  )
};

export default ProductDetails;
