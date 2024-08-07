import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import ProductCard from '../components/ProductCard';
import product1Image from '../assets/images/loaferMen.jpg';

const products = [
  { name: 'Product 1', price: 29.99, image: product1Image },
  { name: 'Product 2', price: 19.99, image: 'path/to/image2.jpg' },
  { name: 'Product 3', price: 39.99, image: 'path/to/image3.jpg' },
  { name: 'Product 4', price: 49.99, image: 'path/to/image4.jpg' },
];

const Home = () => {
  return (
    <div className="home">
      <section className="banner">
        <h1 className="lobster-regular">Welcome to MyEcommerce</h1>
        <p>Shop the best products at the best prices</p>
      </section>
      <section className="categories">
        <div className="category-grid">
          <Link to="/category/woman" className="category">WOMAN</Link>
          <Link to="/category/man" className="category">MAN</Link>
          <Link to="/category/kids" className="category">KIDS</Link>
          <Link to="/category/shoes" className="category">SHOES</Link>
          <Link to="/category/bags" className="category">BAGS</Link>
          <Link to="/category/beauty" className="category">BEAUTY</Link>
        </div>
      </section>
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>
      <section className="promotions">
        <h2>Promotions</h2>
        <div className="promotion-banner">Promotion 1</div>
        <div className="promotion-banner">Promotion 2</div>
      </section>
    </div>
  );
};

export default Home;