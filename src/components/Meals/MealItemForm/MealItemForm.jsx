import Input from "../../UI/Input/Input.jsx";
import { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";

function MealItemForm({ onAddToCart }) {
  const amountInputRef = useRef(null);
  const [isQuantityValid, setIsQuantityValid] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();

    const quantity = Number(amountInputRef.current.value);

    if (quantity < 1 || quantity > 5) {
      setIsQuantityValid(false);
      return;
    }

    onAddToCart(quantity);
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Input
        ref={amountInputRef}
        label="Quantity"
        input={{
          id: "quantity",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!isQuantityValid && <p>Please enter a valid quantity (1 - 5)</p>}
    </form>
  );
}

export default MealItemForm;
