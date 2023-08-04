import Modal from "../UI/Modal/Modal.jsx";
import CartContext from "../../context/CartContext.js";
import CartItem from "./CartItem/CartItem.jsx";
import { useContext } from "react";
import React from "react";
import classes from "./Cart.module.css";

function Cart({ onHideCart }) {
  const { items } = useContext(CartContext);

  const totalAmount = items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const hasItems = items.length > 0;

  return (
    <Modal onHideCart={onHideCart}>
      <ul className={classes["cart-items"]}>
        {items.length > 0 ? (
          <>
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </>
        ) : (
          <p>No items in the cart</p>
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
