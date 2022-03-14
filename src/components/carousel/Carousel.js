import React, { useEffect, useState, useRef } from 'react';

import './Carousel.css';

import Api from '../../service/Api';

export default function Caroulsel() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    Api.get('/browse/featured-playlists').then((response) => {
      setData(response.data.playlists.items);
    });
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (!data || !data.length) return null;

  return (
    <div className="container-carousel">
      <div className="main-title">
        <h1>Featured Playlists</h1>
      </div>
      <button className="left-btn" onClick={handleLeftClick}>
        <img src="/static/images/216151_right_chevron_icon.png" alt="" />
      </button>

      <div className="carousel" ref={carousel}>
        {data.map((item) => {
          const { id, images, name, description, href } = item;

          return (
            <div className="item" key={id}>
              <div className="image">
                <a href={href}>
                  <img src={images[0].url} alt={name} />
                </a>
              </div>
              <div className="title">
                <h2>{name}</h2>
              </div>
              <div className="description">
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <button className="right-btn" onClick={handleRightClick}>
        <img src="/static/images/216151_right_chevron_icon.png" alt="" />
      </button>
    </div>
  );
}
