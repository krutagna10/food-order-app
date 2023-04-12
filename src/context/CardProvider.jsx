import { useReducer } from "react";
import CartContext from "./CartContext.js";

const INITIAL_STATE = {
  items: [],
  totalAmount: 0,
};

function reducer(cart, action) {
  switch (action.type) {
    case "add-item": {
      // const nextItems = [...cart.items, action.item];

      const hasItem = cart.items.find((item) => {
        return action.item.id === item.id;
      });

      let nextItems;
      if (hasItem) {
        nextItems = cart.items.map((item) => {
          return action.item.id === item.id
            ? { ...item, quantity: action.item.quantity + item.quantity }
            : item;
        });
      } else {
        nextItems = [...cart.items, action.item];
      }

      const nextAmount =
        cart.totalAmount + action.item.price * action.item.quantity;
      return { items: nextItems, totalAmount: nextAmount };
    }

    case "remove-item": {
      const nextItems = cart.items
        .map((item) => {
          return action.deleteId === item.id
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        })
        .filter((item) => {
          return item.quantity > 0;
        });

      return { ...cart, items: nextItems };
    }
  }
}

function CardProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, INITIAL_STATE);

  function handleAddItem(item) {
    dispatch({ type: "add-item", item: item });
  }

  function handleRemoveItem(deleteId) {
    console.log(deleteId);
    dispatch({ type: "remove-item", deleteId: deleteId });
  }

  const cartContext = {
    items: cart.items,
    totalAmount: cart.totalAmount,
    onAddItem: handleAddItem,
    onRemoveItem: handleRemoveItem,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CardProvider;
