import React, { useState, useEffect } from "react";
import './App.css';

import Navigation from "./components/navigation/Navigation";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";

import PageContext from './PageContext';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [instagramPosts, setInstagramPosts] = useState([]);
  const [filteredInstagramPosts, setFilteredInstagramPosts] = useState([]);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,children{media_url}&access_token=IGQVJYaGxRVThGb0lLMXY3ZA0hwdmo0LWZAvT2pwQU12aFdWakwxMzVQYmt2NU9keHJ6WjN5bHY3a2tjNTZAGaXg4UXFmZAXJIcHhGM0xZAY0M5NkhxaW92WlMzdFlQZAXM1Ml85emNXWUpyQzFnMm8zdUEtRAZDZD`
        );
        const data = await response.json();
        setInstagramPosts(data.data);
        setFilteredInstagramPosts(data.data);
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
      }
    };

    fetchInstagramPosts();
  }, []);

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
    <PageContext.Provider value={{ currentPage, handlePageChange, instagramPosts, filteredInstagramPosts, setFilteredInstagramPosts }}>
      <div className="App">
        <Navigation onPageChange={handlePageChange}/>
        <div className='content'>
          {renderContent()}
        </div>
        <Footer/>
      </div>
    </PageContext.Provider>
  );
}

export default App;
