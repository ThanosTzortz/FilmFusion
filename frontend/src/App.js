import logo from './logo.svg';
import './App.css';
import SearchPage from '../pages/Searchpage';
import Searchbar from '../pages/Searchbar';

function App() {
  return (
    <div className="App">
      <Searchbar/>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
