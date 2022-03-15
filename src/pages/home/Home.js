import React from 'react';

import './Home.css';

import Header from '../../components/commom/header/Header';
import Caroulsel from '../../components/carousel/Carousel';
import Search from '../search/Search';
//import renderArtists from '../../pages/search/Search';

export default function Home() {
  return (
    <div className="home">
      <Header />
      <Caroulsel />
      <section className="section">
        <Search />
      </section>
    </div>
  );
}
