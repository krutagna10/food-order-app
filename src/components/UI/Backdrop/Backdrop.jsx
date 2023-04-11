import classes from "./Backdrop.module.css";
import React from "react";
import ReactDOM from "react-dom";

const portalElement = document.getElementById("backdrop");

function Backdrop({ onHideCart }) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div onClick={onHideCart} className={classes.backdrop}></div>,
        portalElement
      )}
    </React.Fragment>
  );
}

export default Backdrop;
