import React, { useState, useEffect } from 'react';

import { FaSearch } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import api from '../../service/Api';

import './Search.css';

export default function Search() {
  const [searchKey, setSearchKey] = useState('');
  const [token, setToken] = useState('');
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [playlists, setPlaylists] = useState([]);

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

  const search = async (e) => {
    e.preventDefault();

    const data = await api.get(
      `/search?q=${searchKey}&type=album%2Cartist%2Cplaylist%2Ctrack&market=br`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setAlbums(data.data.albums.items);
    setArtists(data.data.artists.items);
    setTracks(data.data.tracks.items);
    setPlaylists(data.data.playlists.items);
  };

  const logout = () => {
    setToken('');
    window.localStorage.removeItem('token');
  };

  return (
    <div className="search">
      <div className="search-header">
        {token ? (
          <form onSubmit={search}>
            <IconContext.Provider value={{ color: '#4D505F', size: '1.1em' }}>
              <FaSearch />
            </IconContext.Provider>
            <input
              className="search-input"
              type="text"
              placeholder="Search artists, playlist or tracks"
              onChange={(e) => setSearchKey(e.target.value)}
            />
            <button className="btn-submit" type={'submit'}></button>
          </form>
        ) : (
          <h2>
            <a href="/login">Please Login</a>
          </h2>
        )}
        {!token ? (
          <></>
        ) : (
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        )}
      </div>

      <div className="search-results">
        <section className="section-artist">
          <div className="title-result">
            <h1>Top result</h1>
          </div>
          {artists.slice(0, 2).map((artist) => (
            <div className="artist" key={artist.id}>
              {artist.images.length ? (
                <img width={'50%'} src={artist.images[0].url} alt="" />
              ) : (
                <div>No Image</div>
              )}
              <div className="artist-name">{artist.name}</div>
            </div>
          ))}
        </section>
        <section className="section-albums">
          {albums.slice(0, 2).map((album) => (
            <div className="album" key={album.id}>
              {album.images.length ? (
                <img width={'50%'} src={album.images[0].url} alt="" />
              ) : (
                <div>No Image</div>
              )}
              <h1 className="album-name">{album.name}</h1>
            </div>
          ))}
        </section>
        <section className="section-tracks">
          {tracks.slice(0, 2).map((track) => (
            <div className="track" key={track.id}>
              {track.album.images.length ? (
                <img width={'50%'} src={track.album.images[0].url} alt="" />
              ) : (
                <div>No Image</div>
              )}
              {track.name}
            </div>
          ))}
        </section>
        <section className="section-playlists">
          {playlists.slice(0, 2).map((playlist) => (
            <div className="playlist" key={playlist.id}>
              {playlist.images.length ? (
                <img width={'50%'} src={playlist.images[0].url} alt="" />
              ) : (
                <div>No Image</div>
              )}
              {playlist.name}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
