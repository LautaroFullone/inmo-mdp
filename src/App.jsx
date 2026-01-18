import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import FeaturedPropertiesSearch from './components/home/FeaturedProperties';
import Services from './components/home/Services';
import QuienesSomos from './components/home/QuienesSomos';
import Contact from './components/home/Contact';
import Footer from './components/layout/Footer';
import PropertiesPage from './pages/PropertiesPage';
import PropertyDetailsPage from './pages/PropertyDetailsPage';
import Dashboard from './pages/admin/Dashboard';
import AdminProperties from './pages/admin/Properties';

const Home = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <FeaturedPropertiesSearch />
      <Services />
      <QuienesSomos />
      <Contact />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propiedades" element={<PropertiesPage />} />
        <Route path="/propiedades/:id" element={<PropertyDetailsPage />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/properties" element={<AdminProperties />} />
      </Routes>
    </Router>
  );
}

export default App;
