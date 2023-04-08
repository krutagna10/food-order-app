import Header from "./components/Layout/Header/Header.jsx";
import Meals from "./components/Meals/Meals.jsx";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
