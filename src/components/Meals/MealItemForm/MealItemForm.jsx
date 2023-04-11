import Input from "../../UI/Input/Input.jsx";
import { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";

function MealItemForm({ onAddToCart }) {
  const amountInputRef = useRef(null);
  const [isAmountValid, setIsAmountValid] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountValue = Number(enteredAmount);

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountValue < 1 ||
      enteredAmount > 5
    ) {
      setIsAmountValid(false);
      return;
    }

    onAddToCart(enteredAmountValue);
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!isAmountValid && <p>Please enter a valid amount (1 - 5)</p>}
    </form>
  );
}

export default MealItemForm;
