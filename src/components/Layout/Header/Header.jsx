import React from "react";
import meals from "../../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton.jsx";

function Header() {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={meals} alt="A table full of delicious food!" />
        <img src={meals} alt="A table full of delicious food!" />
      </div>
    </React.Fragment>
  );
}

export default Header;
