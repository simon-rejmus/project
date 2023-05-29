import React from "react";
import './App.css';

import Navigation from "./components/navigation/Navigation";
import InstagramPost from "./components/instagram/InstagramPost";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <InstagramPost/>
      <Footer/>
    </div>
  );
}

export default App;
