import Card from "../../UI/Card/Card.jsx";
import MealItem from "../MealItem/MealItem.jsx";
import DUMMY_MEALS from "./data.js";
import classes from "./AvailableMeals.module.css";

function AvailableMeals() {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
