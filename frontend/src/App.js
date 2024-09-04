import "./App.css";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Searchbar from "./components/Searchbar";
// import MovieCarousel from "./components/MovieCarousel";
import SearchPage from '../pages/Searchpage';
import Searchbar from '../pages/Searchbar';


function App() {
  return (
    <div className="App">

      <Navbar />
      {/* <Searchbar /> */}
      {/* <MovieCarousel /> */}
      {/* <Footer /> */}

      <Searchbar/>

    </div>
  );
}

export default App;
