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

  //Fetching posts from Instagram Graph API
  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,children{media_url}&access_token=IGQWRNbkFyOXhHRkZAOYWN1WDU5bXpUYTBZAMjJobTZAzejYxZADE4UHQ3MUcxOGhMaGd1bUx4UldHakRvZAmRaRjhKRV9KV2FyeEtkUEZA3TVo0X2RNOTRxZAkc1eWsyVWZATbjF3N3FhVGlfbUJ3RWRfQlNPY3FSOXhkaVEZD`
        );
        const data = await response.json();

        const filteredPosts = data.data.filter(
          (post) =>
            post.media_type !== 'REEL' &&
            (post.media_type !== 'CAROUSEL_ALBUM' || (post.children && post.children.data.length >= 3)) &&
            !post.caption.toLowerCase().includes('reels')
        );

        setInstagramPosts(filteredPosts);
        setFilteredInstagramPosts(filteredPosts);
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
          <div className="empty-fill"></div>
        </div>
        <Footer/>
      </div>
    </PageContext.Provider>
  );
}

export default App;