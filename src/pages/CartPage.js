import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const CartPage = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.name} style={{ width: '50px' }} />
              <p>{item.name}</p>
              <p>${item.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
