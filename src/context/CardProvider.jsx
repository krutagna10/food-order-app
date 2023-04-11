import CartContext from "./CartContext.js";

function CardProvider({ children }) {
  function handleAddItem(item) {}

  function handleRemoveItem(id) {}

  const cartContext = {
    items: [],
    totalAmount: 0,
    onAddItem: handleAddItem,
    onRemoveItem: handleRemoveItem,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CardProvider;
