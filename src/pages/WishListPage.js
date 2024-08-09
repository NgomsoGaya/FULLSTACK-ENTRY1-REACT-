import React, { useContext } from 'react';
import { WishlistContext } from '../contexts/WishListContext';

const WishlistPage = () => {
  const { wishlist } = useContext(WishlistContext); // Access the wishlist state

  return (
    <div>
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul>
          {wishlist.map((item, index) => (
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

export default WishlistPage;
