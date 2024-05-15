import React from "react";
import "./Search.css"

function Search({filterText, onFilterTextChange}) {
    return(
    <input type='text' value={filterText} onChange={(e) => onFilterTextChange(e.target.value)} placeholder='search robots' className='searchbar'/>
    )
  }

export default Search;