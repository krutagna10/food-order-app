import classes from "./HeaderCartButton.module.css";
import { IonIcon } from "@ionic/react";
import { cart } from "ionicons/icons";

function HeaderCartButton() {
  return (
    <button className={classes.button}>
      <IonIcon className={classes.icon} icon={cart} />
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
}

export default HeaderCartButton;
