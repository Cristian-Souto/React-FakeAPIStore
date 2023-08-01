import React, { useState, createContext, useEffect } from 'react';

//create context cart
export const CartContext = createContext();
const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  //state total count
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const total = (cart.reduce((acc, item) => acc + item.price * item.quantity, 0))
    setTotal(total);
  }, [cart])

  //unpdate total count
  useEffect(() => {
    const count = (cart.reduce((acc, item) => acc + item.quantity, 0))
    setTotalCount(count);
  }, [cart])

  //add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, quantity: 1 }
    console.log(newItem)
    //check if item in cart
    const cartItem = cart.find(item => item.id === id);

    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, quantity: cartItem.quantity + 1 }
        } else {
          return item;
        }
      })
      setCart(newCart)
    } else {
      setCart([...cart, newItem])
    }
  }
  //remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  }
  //clear cart
  const clearCart = () => {
    setCart([]);
  }
  //increment quantity
  const incrementQuantity = (id) => {
    const item = cart.find(item => item.id === id);
    addToCart(item, id);
  }
  //decrement quantity
  const decrementQuantity = (id) => {
    const itemCart = cart.find(item => item.id === id)
    if (itemCart) {
      const newCart = cart.map(item => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 }
        } else {
          return item
        }
      })
      setCart(newCart)
    }
    if (itemCart.quantity < 2) {
      removeFromCart(id)
    }
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, incrementQuantity, decrementQuantity, totalCount, total }}>
      {children}
    </CartContext.Provider>
  )
};

export default CartProvider;
