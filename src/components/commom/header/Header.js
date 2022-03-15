import React from 'react';
import './Header.css';

import Search from '../../../pages/search/Search';

export default function Header() {
  return (
    <div className="header">
      <a href={`/search`}>Search</a>
    </div>
  );
}
