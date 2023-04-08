import DUMMY_MEALS from "./data.js";
import classes from "./AvailableMeals.module.css";

function AvailableMeals() {
  return (
    <section className={classes.meals}>
      <ul>
        {DUMMY_MEALS.map((meal, index) => (
          <li key={meal.id}>{meal.name}</li>
        ))}
      </ul>
    </section>
  );
}

export default AvailableMeals;
