import Modal from "../UI/Modal/Modal.jsx";
import CartContext from "../../context/CartContext.js";
import CartItem from "./CartItem/CartItem.jsx";
import { useContext } from "react";
import React from "react";
import classes from "./Cart.module.css";

function Cart({ onHideCart }) {
  const { items, totalAmount } = useContext(CartContext);

  const hasItems = items.length > 0;

  function handleAddItem() {}

  function handleRemoveItem() {}

  return (
    <Modal onHideCart={onHideCart}>
      <ul className={classes["cart-items"]}>
        {hasItems ? (
          <>
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </>
        ) : (
          <h2>No items in the cart</h2>
        )}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={onHideCart} className={classes["button-alt"]}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
