import React from 'react';

import './Login.css';

export default function Login() {
  const CLIENT_ID = '0af7191630f9491bbbcbd72d7d2a6d71';
  const REDIRECT_URL = 'http://localhost:3000';
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
  const RESPONSE_TYPE = 'token';

  return (
    <div className="container-login">
      <div className="title">
        <h1>Experience your new way of listening to music!</h1>
      </div>
      <div className="btn-login">
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=${RESPONSE_TYPE}`}
        >
          Login with spotify
        </a>
      </div>
    </div>
  );
}
