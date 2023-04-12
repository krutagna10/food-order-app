import CartContext from "../../../context/CartContext.js";
import { useContext } from "react";
import { IonIcon } from "@ionic/react";
import { cart } from "ionicons/icons";
import classes from "./HeaderCartButton.module.css";

function HeaderCartButton({ onShowCart }) {
  const { items } = useContext(CartContext);

  const numberOfItems = items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  return (
    <button className={classes.button} onClick={onShowCart}>
      <IonIcon className={classes.icon} icon={cart} />
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
}

export default HeaderCartButton;
