import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

const Categories = () => {
  return (
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
  );
};

export default Categories;
