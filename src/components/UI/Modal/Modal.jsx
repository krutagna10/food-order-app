import React from "react";
import Backdrop from "../Backdrop/Backdrop.jsx";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

function Modal({ children, onHideCart }) {
  const portalElement = document.getElementById("modal");

  const modalElement = (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );

  return (
    <React.Fragment>
      <Backdrop onHideCart={onHideCart} />
      {ReactDOM.createPortal(modalElement, portalElement)}
    </React.Fragment>
  );
}

export default Modal;
