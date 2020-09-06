import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import { GiEarthAmerica } from "react-icons/gi";
import "./Countries.css";

export default function Countries(props) {
  const { countries, theme } = useContext(Context);

  return (
    <div className="countries-1">
      {countries && countries.length > 0 ? (
        countries.map((country) => {
          return (
            <div className={`container-${theme}`} key={country.name}>
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
        })
      ) : (
        <div>
          <GiEarthAmerica />
        </div>
      )}
    </div>
  );
}
