import React, { useContext, useState, useEffect } from 'react';
//importa sidebar context
import { SidebarContext } from '../contexts/SidebarContext';
//importa cart context
import { CartContext } from '../contexts/CartContext';
//import icon
import { BsBag } from 'react-icons/bs';
//import logo
import logo from '../img/logo.svg';
import { Link } from 'react-router-dom';
const Header = () => {
  //header state
  const [isActive, setIsActive] = useState(false);
  const { setIsOpen, isOpen } = useContext(SidebarContext);
  const { totalCount } = useContext(CartContext);

  //add eventlistener
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    })
  })

  return (
    <header className={`${isActive ? 'bg-white shadow-md py-3' : 'bg-none py-2' } fixed z-10 w-full transition-all`} >
      <div className='container flex mx-auto justify-between items-center h-full'>
        {/* logo */}
        <Link to={'/'}>
          <div >
            <img className='w-[40px]' src={logo} alt='logo' />
          </div>
        </Link>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='cursor-pointer flex relative'
        >
          <BsBag className='text-2xl' />
          <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] text-white w-[18px] h-[18px] flex justify-center items-center rounded-full'>{totalCount}</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
