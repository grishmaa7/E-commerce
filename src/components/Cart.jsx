import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {

    const {cart} = useContext(CartContext);

  return (
    <>
      {cart.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>Price: {item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </>
  );
};

export default Cart;
