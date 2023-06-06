import React, { useContext, useState, useEffect } from "react";
import PageContext from "../../PageContext";
import logo from '../../logo.png';
import { TbSearch } from 'react-icons/tb';

const Navigation = ({ onPageChange }) => {
  const { currentPage, handlePageChange, instagramPosts, setFilteredInstagramPosts } = useContext(PageContext);
  const [searchInput, setSearchInput] = useState('');

  const handleButtonClick = (page) => {
    handlePageChange(page);
    onPageChange(page);
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = () => {
    const filteredPosts = instagramPosts.filter((post) =>
      post.caption.toLowerCase().includes(searchInput.toLowerCase())
    );

    setFilteredInstagramPosts(filteredPosts);
  };

  useEffect(() => {
    handleSearch();
  }, [searchInput]);

  return (
    <nav>
      <div className="search-bar">
        <button className="search-icon-btn" onClick={handleSearch}>
          <TbSearch className="search-icon"/>
        </button>
        <input
          type="text"
          className="search-input"
          value={searchInput}
          onChange={handleSearchInputChange}
        />
      </div>
      <div className="logo">
        <button onClick={() => handleButtonClick('home')}>
          <img src={logo} className="App-logo" alt="logo" />
        </button>
      </div>
      <div className="navigation-links">
        <button onClick={() => handleButtonClick('home')}>
          <div className={currentPage === 'home' ? 'nav-link active' : 'nav-link'}>
            Home
          </div>
        </button>
        <button onClick={() => handleButtonClick('contact')}>
          <div className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'}>
            Contact
          </div>
        </button>
        <button onClick={() => handleButtonClick('about')}>
          <div className={currentPage === 'about' ? 'nav-link active' : 'nav-link'}>
            About
          </div>
        </button>
      </div>
    </nav>
  )
}

export default Navigation;
