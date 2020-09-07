import React, { useContext } from "react";
import { CgSearch } from "react-icons/cg";
import { Context } from "../../Context/Context";

import "./SearchBar.css";

export default function SearchBar(props) {
  const {
    theme,
    handleSearch,
    searchChange,
    countries,
    Reset,
    filterByRegion
  } = useContext(Context);

  function resetButtom() {
    if (countries.length < 250 || countries === []) {
      return (
        <button className={`button-${theme}`} onClick={() => Reset()}>
          All countries
        </button>
      );
    } else {
      return <button disabled>All countries</button>;
    }
  }

  // Search by country name
  function onSearch() {
    handleSearch();
  }

  function searchChg(event) {
    searchChange(event);
  }

  // filter by region
  function regionFilter(event) {
    event.preventDefault();
    filterByRegion(event);
  }

  return (
    <div className="searchbar">
      <div className={`text-search-${theme}`}>
        <CgSearch className="search-icon" onClick={onSearch} />
        <input
          type="search"
          placeholder="Search for a country..."
          onChange={searchChg}
        />
      </div>
      <div className={`region-search-${theme}`}>
        <form>
          {/* <label>Filter by region:</label> */}
          <select name="regions" id="region-select" onChange={regionFilter}>
            <option defaultValue>Filter By region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Oceania">Oceania</option>
            <option value="Polar">Polar</option>
            <option value="Europe">Europe</option>
          </select>
          {resetButtom()}
        </form>
      </div>
    </div>
  );
}
