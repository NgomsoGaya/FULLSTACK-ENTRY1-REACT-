import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home';
import WomanCategory from './pages/WomanCategory';
import ManCategory from './pages/ManCategory';
import KidsCategory from './pages/KidsCategory';
import ShoesCategory from './pages/ShoesCategory';
import BagsCategory from './pages/BagsCategory';
import BeautyCategory from './pages/BeautyCategory';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/woman" element={<WomanCategory />} />
        <Route path="/category/man" element={<ManCategory />} />
        <Route path="/category/kids" element={<KidsCategory />} />
        <Route path="/category/shoes" element={<ShoesCategory />} />
        <Route path="/category/bags" element={<BagsCategory />} />
        <Route path="/category/beauty" element={<BeautyCategory />} />
      </Routes>
    </Router>
  );
};

export default App;
