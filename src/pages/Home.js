import React, { useContext } from 'react';
//import product context
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';
import Hero from '../components/Hero';
//import footer
import Footer from '../components/Footer';

const Home = () => {
  //get product from context
  const { product } = useContext(ProductContext);
 
  //filter product by category men´s o women´s clothes
  const filterProductByCategory = product.filter(item => item.category === "men's clothing" || item.category === "women's clothing")

  return (
    <div>
      <Hero />
      <section className='py-16'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-sm mx-auto md:max-w-none md:mx-0'>
            {filterProductByCategory.map(product => (
              <Product key={product.id} product={product}/>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
export default Home;
