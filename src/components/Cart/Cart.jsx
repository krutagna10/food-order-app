import Modal from "../UI/Modal/Modal.jsx";
import classes from "./Cart.module.css";

function Cart() {
  const arr = [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }];
  return (
    <Modal>
      <ul className={classes["cart-items"]}>
        {arr.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
