import React, { useContext, createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{cart, setCart, addToCart}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;
