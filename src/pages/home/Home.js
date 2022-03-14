import React from 'react';

import './Home.css';

import Header from '../../components/commom/header/Header';
import Caroulsel from '../../components/carousel/Carousel';

export default function Home() {
  return (
    <div className="home">
      <Header />
      <Caroulsel />
    </div>
  );
}
