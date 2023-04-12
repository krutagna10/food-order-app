import Header from "./components/Header/Header.jsx";
import Meals from "./components/Meals/Meals.jsx";
import Cart from "./components/Cart/Cart.jsx";
import CardProvider from "./context/CardProvider.jsx";
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
    <CardProvider>
      {isCartVisible && <Cart onHideCart={handleHideCart} />}
      <Header onShowCart={handleShowCart} />
      <main>
        <Meals />
      </main>
    </CardProvider>
  );
}

export default App;
