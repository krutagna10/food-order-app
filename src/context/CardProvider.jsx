import { useReducer } from "react";
import CartContext from "./CartContext.js";

const INITIAL_STATE = {
  items: [],
  totalAmount: 0,
};

function reducer(cartState, action) {
  switch (action.type) {
    case "add-item": {
      const nextItems = [...cartState.items, action.item];
      const nextAmount =
        cartState.totalAmount + action.item.price + action.item.amount;
      return { items: nextItems, amount: nextAmount };
    }

    case "remove-item": {
    }
  }
}

function CardProvider({ children }) {
  const [cartState, dispatch] = useReducer(reducer, INITIAL_STATE);

  function handleAddItem(item) {
    dispatch({ type: "add-item", item: item });
  }

  function handleRemoveItem(deleteId) {
    dispatch({ type: "remove-item", deleteId: deleteId });
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    onAddItem: handleAddItem,
    onRemoveItem: handleRemoveItem,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CardProvider;
