import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

import Carousel from '../layout/Carousel';
import Banner from '../layout/Banner';
import JumbotronComponent from '../layout/Jumbotron';
import TextAnimation from './TextAnimation';

import img from '../../assets/img/prawn11.jpg';
import img2 from '../../assets/img/foodprinted_sidedish.jpg';
import img3 from '../../assets/img/DSC_1753.JPG';

const Home = () => (
  <div>
    <Jumbotron>
      <h1 className="display-3">Hello, world!</h1>
      <p className="lead">
        This is a simple hero unit, a simple Jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr className="my-2" />
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <p className="lead">
        <Button color="primary">Learn More</Button>
      </p>
    </Jumbotron>
  </div>
);

export default Home;
