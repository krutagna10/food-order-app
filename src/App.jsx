import Header from "./components/Header/Header.jsx";
import Meals from "./components/Meals/Meals.jsx";
import Cart from "./components/Cart/Cart.jsx";
import React, { useState } from "react";

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  function handleShowCart() {
    setIsCartVisible(true);
  }

  function handleHideCart() {
    setIsCartVisible(false);
  }

  return (
    <React.Fragment>
      {isCartVisible && <Cart />}
      <Header onShowCart={handleShowCart} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
