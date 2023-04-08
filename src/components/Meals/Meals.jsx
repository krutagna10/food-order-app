import MealsSummary from "./MealsSummary/MealsSummary.jsx";
import AvailableMeals from "./AvailableMeals/AvailableMeals.jsx";
import React from "react";

function Meals() {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvailableMeals />
    </React.Fragment>
  );
}

export default Meals;
