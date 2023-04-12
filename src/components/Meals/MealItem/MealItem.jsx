import CartContext from "../../../context/CartContext.js";
import MealItemForm from "../MealItemForm/MealItemForm.jsx";
import { useContext } from "react";
import classes from "./MealItem.module.css";

function MealItem({ id, name, description, price }) {
  const { onAddItem } = useContext(CartContext);

  function handleAddToCart(quantity) {
    onAddItem({
      id: id,
      name: name,
      quantity: quantity,
      price: price,
    });
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>${price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={handleAddToCart} />
      </div>
    </li>
  );
}

export default MealItem;
