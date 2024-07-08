import React from 'react';
import ImageSlider from '../../components/Slyder/Slider';
import Columns from '../../components/Columns/Columns';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <ImageSlider />
      <Columns />
    </div>
  );
};

export default HomePage;
