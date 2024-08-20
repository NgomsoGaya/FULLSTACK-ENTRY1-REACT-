import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="banner" id='Banner'>
        <h1 className="lobster-regular">Welcome to MyEcommerce</h1>
        <p>Shop the best products at the best prices</p>
      </section>
      <section className="banner">
      <Link to="/category/woman" className="category">WOMAN</Link>
      </section>
      <section className="banner">
      <Link to="/category/man" className="category">MAN</Link>
      </section>
      <section className="banner">
      <Link to="/category/kids" className="category">KIDS</Link>
      </section>
      <section className="banner">
      <Link to="/category/shoes" className="category">SHOES</Link>
      </section>
      <section className="banner">
      <Link to="/category/bags" className="category">BAGS</Link>
      </section>
      <section className="banner">
      <Link to="/category/beauty" className="category">BEAUTY</Link>
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