import React from "react";
import Search from "../search";

import './styles.css'

export default function Header() {

  return (
      <div className="header">
        <form>
          <Search />
          <input className="search-input" type="text" placeholder="Search artists, playlist or tracks"></input>
        </form>
      </div>    
    );
}