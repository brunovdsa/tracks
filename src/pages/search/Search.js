import React, { useState, useEffect } from 'react';

import { FaSearch } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import Api from '../../service/Api';
import './Search.css';

export default function Search() {
  const [searchKey, setSearchKey] = useState('');
  const [token, setToken] = useState('');
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem('token');

    if (!token && hash) {
      token = hash
        .substring(1)
        .split('&')
        .find((elem) => elem.startsWith('access_token'))
        .split('=')[1];

      window.location.hash = '';
      window.localStorage.setItem('token', token);
    }
    setToken(token);
  }, []);

  const searchArtists = async (e) => {
    e.preventDefault();
    const { data } = await Api.get(`/search`, {
      params: {
        q: searchKey,
        type: 'artist',
      },
    });
    setArtists(data.artists.items);
  };

  const renderArtists = () => {
    return artists.map((artist) => (
      <div key={artist.id}>
        {artist.images.length ? (
          <img width={'100%'} src={artist.images[0].url} alt="" />
        ) : (
          <div>No Image</div>
        )}
        {artist.name}
      </div>
    ));
  };

  const logout = () => {
    setToken('');
    window.localStorage.removeItem('token');
  };

  return (
    <div className="header">
      {token ? (
        <form onSubmit={searchArtists}>
          <div className="container">
            <IconContext.Provider value={{ color: '#4D505F', size: '1.2em' }}>
              <FaSearch />
            </IconContext.Provider>
          </div>

          <input
            className="search-input"
            type="text"
            placeholder="Search artists, playlist or tracks"
            onChange={(e) => setSearchKey(e.target.value)}
          />

          <button type={'submit'}></button>
        </form>
      ) : (
        <h2>Please Login</h2>
      )}

      {!token ? <></> : <button onClick={logout}>Logout</button>}
      {renderArtists()}
    </div>
  );
}
