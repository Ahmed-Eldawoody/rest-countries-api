import React, { useState, useEffect } from "react";
import { HiOutlineMoon, HiMoon } from "react-icons/hi";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [theme, setTheme] = useState("Light");
  const [allCountires, setAllCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  // Fetching data from the api
  useEffect(() => {
    const url = "https://restcountries.eu/rest/v2/all";

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
        setAllCountries(jsonResponse);
        setCountries(jsonResponse);
      });
  }, []);

  // Change theme name
  function themeChange() {
    theme === "Light" ? setTheme("Dark") : setTheme("Light");
  }

  // Change the moon icon depending on the theme
  function moon() {
    if (theme === "Light") {
      return <HiOutlineMoon className="icon" />;
    } else {
      return <HiMoon className="icon" />;
    }
  }

  // handle search
  function handleSearch() {
    setCountries(
      countries.filter((cuntry) =>
        cuntry.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }

  function searchChange(event) {
    setSearch(event.target.value);
  }

  function Reset() {
    setCountries([...allCountires]);
  }

  // by region
  function filterByRegion(event) {
    handleSubmit(event.target.value);
    event.preventDefault();
    if (event.target.value === "") {
      setCountries([...allCountires]);
    }
  }

  function handleSubmit(value) {
    const filterdByRegionCountries = allCountires.filter(
      (cunt) => cunt.region === value
    );
    setCountries(filterdByRegionCountries);
  }

  return (
    <Context.Provider
      value={{
        countries,
        theme,
        themeChange,
        moon,
        handleSearch,
        searchChange,
        Reset,
        filterByRegion
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
