import { createContext } from "react";

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  onAddItem: (item) => {},
  onRemoveItem: (id) => {},
});

export default CartContext;
