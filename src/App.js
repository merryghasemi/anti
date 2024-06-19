// src/App.js
import React from 'react';
import HeroSection from './components/Hero/Hero';
import Navigation from './components/Navbar/Navigation';
import Slider from './components/Slider/Slider';
import Footer from './components/Footer/Footer';
import { images1, images2, images3 } from './components/Slider/ImageData';
import Album from './components/Album/Album';
import Slider_auto from './components/Slider/Slider_auto';
import Benefit from './components/Benefit/Benefit';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <h2 className='text-center p-5'>Free tools to skyrocket your creative freedom</h2>
      <Slider images={images1} />
      <Slider images={images2} />
      <Album />

      <Benefit />
      <div className='text-center'>
        <h2>Cash in your creations</h2>
        <p>
          Behind every stock image there’s a creative mind. ¡Vamos! Join Freepik’s
          creator community and start selling your content
        </p>
      </div>
      <Slider_auto images={images3} />
      <Slider_auto images={images2} />

      <Footer />
    </div>
  );
};

export default App;
