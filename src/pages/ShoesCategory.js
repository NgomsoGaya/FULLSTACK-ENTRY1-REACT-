import React from 'react';
import ProductCard from '../components/ProductCard';
import product1Image from '../assets/images/men3.webp';
import './Category.css';

const products = [
  { name: 'Shoes Product 1', price: 29.99, image: product1Image },
];

const WomanCategory = () => {
  return (
    <div className="category-page">
      <h1>Shoes Category</h1>
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default WomanCategory;
