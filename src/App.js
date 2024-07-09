// src/App.js
import React from 'react';
import Navigation from './components/Navbar/Navigation';
import Footer from './components/Footer/Footer';
import Home from './components/Pages/Home';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SearchPage from './components/SearchPage/SearchPage';
import ComparePage from './components/Pages/Compare/ComparePage';

const App = () => {
  return (
    <div className="App ">
     
      <Routes>
        <Route path='/search' element={<SearchPage />} />
        <Route path='/' element={<Home />} />
        <Route path='/compare' element={<ComparePage/>}/>
      </Routes>


      <Footer />
    </div>
  );
};

export default App;
