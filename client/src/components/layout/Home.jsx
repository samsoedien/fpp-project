import React from 'react';
import Carousel from './Carousel';
import Jumbotron from './Jumbotron';

import img from '../../assets/img/prawn11.jpg';
import img2 from '../../assets/img/foodprinted_sidedish.jpg';
import img3 from '../../assets/img/DSC_1753.JPG';

const Home = () => (
  <div>
    <Carousel img={img} img2={img2} img3={img3} />
    <Jumbotron />
  </div>
);

export default Home;