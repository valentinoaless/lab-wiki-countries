import React from 'react';
import NavBar from './components/navbar.js'
import CountriesList from './components/countrieslist';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <CountriesList />
    </div>
  );
}

export default App;
