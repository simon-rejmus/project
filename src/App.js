import React, { useState } from "react";
import './App.css';

import Navigation from "./components/navigation/Navigation";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'contact':
        return <Contact />;
      case 'about':
        return <About />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Navigation onPageChange={handlePageChange}/>
      <div className='content'>
        {renderContent()}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
