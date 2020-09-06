import React, { useState, useEffect } from "react";
import "./Countries.css";

export default function Countries(props) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const url =
      "https://restcountries.eu/rest/v2/all?fields=name;topLevelDomain;capital;region;subregion;population;borders;currencies;languages;flag;nativeName";

    fetch(url)
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Requist failed!");
        },
        (networkError) => console.log(networkError.message)
      )
      .then((jsonResponse) => {
        setCountries(jsonResponse);
      });
  }, []);

  return (
    <div className="countries-1">
      {countries.map((country) => {
        return (
          <div className={`container-${props.theme}`} key={country.name}>
            <img src={country.flag} alt="country flag" className="flag" />
            <h3 className="name">{country.name}</h3>
            <h5 className="population">
              Population: <span>{country.population.toLocaleString()}</span>
            </h5>
            <h5 className="region">
              Region: <span>{country.region}</span>
            </h5>
            <h5 className="capital">
              capital: <span>{country.capital}</span>
            </h5>
          </div>
        );
      })}
    </div>
  );
}
