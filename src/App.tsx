import React, { useState, useContext } from "react";
import WeatherContext from "./weatherContext";

import Background from "./components/Background";
import SearchBox from "./components/Searchbox";
import Weather from "./components/Weather";

const App = () => {
  return (
    <div>
      <main>
        <Background />
        <SearchBox />
        <Weather />
      </main>
    </div>
  );
};

export default App;
