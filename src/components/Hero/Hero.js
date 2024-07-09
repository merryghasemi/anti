import React from 'react';
import SearchForm from '../Search/SearchForm';
import './Hero.css';
import Navigation from '../Navbar/Navigation';

const HeroSection = () => {
  return (
   <>
   
    <div className="hero-section">
      <div className="container">
      
        <div className="row justify-content-center">
          <div className="col-md-9">
           
            <SearchForm />
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default HeroSection;
