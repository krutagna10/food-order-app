import Header from "./components/Layout/Header/Header.jsx";
import Meals from "./components/Meals/Meals.jsx";
import Cart from "./components/Cart/Cart.jsx";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
