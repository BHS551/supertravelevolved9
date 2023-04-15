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
