import logo from './logo.svg';
import './App.css';
import { SearchPage } from './components/search-page';

function App() {
  return (
    <div className="App">
       <header className="App-header">
        <h2>Super Travel Evolved</h2>
      </header>
      <body className="App-content">
        <SearchPage />
      </body>
    </div>
  );
}

export default App;

 {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}