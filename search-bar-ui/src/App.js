import logo from './logo.svg';
import './App.css';
import React from 'react';
import SearchBar from './SearchBar';

const App = () => {
  
  // update handleSearch to connect to backend Llama 2 API 
  const handleSearch = (query) => {
    console.log('Performing search for:', query);
  };

  return (
    <div>
      <h1>Google Search</h1>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
};

export default App;
