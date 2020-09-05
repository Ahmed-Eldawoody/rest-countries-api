import React from "react";
import { CgSearch } from "react-icons/cg";

import "./SearchBar.css";

export default function SearchBar(props) {
  return (
    <div className="searchbar">
      <div className={`text-search-${props.theme}`}>
        <CgSearch className="search-icon" />
        <input type="text" placeholder="Search for a country..." />
      </div>
      <div className={`region-search-${props.theme}`}>
        <form>
          {/* <label>Filter by region:</label> */}
          <select name="regions" id="region-select">
            <option value="">Filter By region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Oceania">Oceania</option>
            <option value="Polar">Polar</option>
            <option value="Europe">Europe</option>
          </select>
        </form>
      </div>
    </div>
  );
}
