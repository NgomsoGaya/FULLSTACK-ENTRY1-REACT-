import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { WishlistContext } from '../contexts/WishListContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.price}</p>
      <div className="product-actions">
        <button className="product-button" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
        <button className="wishlist-button" onClick={() => addToWishlist(product)}>
          {/* Font Awesome heart icon */}
          <i className="fas fa-heart"></i>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
