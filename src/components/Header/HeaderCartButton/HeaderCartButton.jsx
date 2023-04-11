import CartContext from "../../../context/CartContext.js";
import { useContext } from "react";
import { IonIcon } from "@ionic/react";
import { cart } from "ionicons/icons";
import classes from "./HeaderCartButton.module.css";

function HeaderCartButton({ onShowCart }) {
  const cartItems = useContext(CartContext);
  console.log(cartItems);

  return (
    <button className={classes.button} onClick={onShowCart}>
      <IonIcon className={classes.icon} icon={cart} />
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
}

export default HeaderCartButton;
