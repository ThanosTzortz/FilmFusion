import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Searchbar from "./components/Searchbar";
import MovieCarousel from "./components/MovieCarousel";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Loginpage";
import SignupPage from "./pages/Signuppage";
import Homepage from "./pages/Homepage";


const API_KEY = '75965813';

function App() {
  const [defaultMovies, setDefaultMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state for login

  // Fetch default movies
  useEffect(() => {
    const fetchDefaultMovies = async () => {
      try {
        const response = await axios.get(`http://www.omdbapi.com/?s=horror&apikey=${API_KEY}`);
        const data = response.data;
        if (data.Search) {
          setDefaultMovies(data.Search.slice(0, 10));
        } else {
          setDefaultMovies([]);
        }
      } catch (error) {
        console.error('There was an error when fetching default movies:', error);
      }
    };

    fetchDefaultMovies();
  }, []);

  // Handle search functionality
  const handleSearch = async (query) => {
    setIsSearchActive(true);
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

  // Function to handle login (for demonstration purposes)
  const handleLogin = () => {
    // Simulate login
    setIsLoggedIn(true);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/homepage" element={<Homepage />} />
        </Routes>

        {isLoggedIn && <Searchbar onSearch={handleSearch} />} {/* Render Searchbar only if logged in */}

        <MovieCarousel movies={isSearchActive ? searchResults : defaultMovies} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
