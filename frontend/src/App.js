import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Searchbar from "./components/Searchbar";
import MovieCarousel from "./components/MovieCarousel";




const API_KEY = '75965813';

function App() {

  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
      const data = await response.json();
      if (data.Search) {
        setSearchResults(data.Search);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div className="App">

      <Navbar />
      <Searchbar onSearch={handleSearch}/>
      <MovieCarousel movies={searchResults}/>
      <Footer />
    </div>
  );
}

export default App;
