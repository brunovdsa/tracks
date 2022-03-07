import React from "react";

import {FaSearch} from "react-icons/fa";
import { IconContext } from "react-icons/lib";

export default function Search() {  

  return (
    
      <div className="container">
        <IconContext.Provider
          value={{color: "#4D505F", size: "1.2em"}}
        >
          <FaSearch />
        </IconContext.Provider>  
      </div>    
    );
}