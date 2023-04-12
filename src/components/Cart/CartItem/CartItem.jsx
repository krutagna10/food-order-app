import { useContext } from "react";
import CartContext from "../../../context/CartContext.js";
import classes from "./CartItem.module.css";

function CartItem({ item }) {
  const { onAddItem, onRemoveItem } = useContext(CartContext);

  function handleAddItem() {
    onAddItem({ ...item, quantity: 1 });
  }

  function handleRemoveItem() {
    onRemoveItem(item.id);
  }

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{item.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>${item.price.toFixed(2)}</span>
          <span className={classes.amount}>x {item.quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={handleRemoveItem}>−</button>
        <button onClick={handleAddItem}>+</button>
      </div>
    </li>
  );
}

export default CartItem;
