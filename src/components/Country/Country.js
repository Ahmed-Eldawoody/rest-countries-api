import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import "./Country.css";

import { Context } from "../../Context/Context";

export default function Country() {
  const { countries, theme } = useContext(Context);
  const { CountryName } = useParams();

  const countArr = countries.filter((country) => country.name === CountryName);

  return (
    <div className="country">
      <Link to="/" className="Link">
        <button className={`button2-${theme}`}>
          <MdKeyboardBackspace className="backArrow" />
          back
        </button>
      </Link>
      <div className="country-info">
        {countArr.map((country) => {
          return (
            <div key={country.name} className="info">
              <div className="flag">
                <img src={country.flag} alt="flag" />
              </div>
              <div className="info">
                <h1>{country.name}</h1>
                <p>
                  <span>Native Name: </span>
                  {country.nativeName}
                </p>
                <p>
                  <span>Population: </span>
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span>Region: </span>
                  {country.region}
                </p>
                <p>
                  <span>Sub Region: </span>
                  {country.subregion}
                </p>
                <p>
                  <span>Capital: </span>
                  {country.capital}
                </p>
                <p>
                  <span>Top Level Domain: </span>
                  {country.topLevelDomain[0]}
                </p>
                <p>
                  <span>Currencies: </span>
                  {country.currencies[0].name}
                </p>
                <p>
                  <span>Languages: </span>
                  {country.languages.map((lang) => {
                    return lang.name + " ";
                  })}
                </p>
                <p>
                  <span>Border: </span>
                  {country.borders.map((bord) => {
                    return bord + " ";
                  })}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
