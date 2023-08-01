import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
//import components
import CartItem from '../components/CartItem';
//import sidebar context
import { SidebarContext } from '../contexts/SidebarContext';
//import cart context
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, totalCount } = useContext(CartContext);

  return (
    <div className={`${isOpen ? 'right-0' : 'right-[-100%]'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
      <div className='flex items-center justify-between py-2 border-b'>
        <div className='uppercase font-semibold text-sm'>Shopping Bag ({totalCount})</div>
        <div
          onClick={handleClose}
          className='cursor-pointer w-8 h-8 flex justify-center items-center'
        >
          <IoMdArrowForward className='text-2xl' />
        </div>
      </div>
      <div className='flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b'>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className='flex flex-col gap-y-3 py-4 mt-4'>
        <div className='flex w-full justify-between items-center'>
          {/*total*/}
          <div className='uppercase font-semibold'>
            <span className='mr-2'>Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
          {/*clear cart icon*/}
          <div onClick={clearCart} className='cursor-pointer py-2 bg-red-600 flex items-center justify-center text-white w-10 h-10 text-xl'>
            <FiTrash2 />
          </div>
        </div>
        <Link to={'/'} className='bg-gray-300 flex justify-center font-medium w-full p-4 rounded-md'>View Cart</Link>
        <Link to={'/'} className='bg-primary text-white flex justify-center font-medium w-full p-4 rounded-md'>Checkout</Link>
      </div>
    </div>
  )
};

export default Sidebar;
