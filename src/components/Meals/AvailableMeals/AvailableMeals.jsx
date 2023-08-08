import Card from "../../UI/Card/Card.jsx";
import MealItem from "../MealItem/MealItem.jsx";
import useFetch from "../../../hooks/useFetch.js";
import classes from "./AvailableMeals.module.css";

const url = "https://food-order-app-10-default-rtdb.firebaseio.com/meals.json";

function AvailableMeals() {
  const { data, isLoading, error } = useFetch(url);

  if (isLoading) {
    return (
      <div className={classes.loading}>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className={classes.error}>
        <h2>{error}</h2>
      </div>
    );
  }

  const meals = [];
  for (const key in data) {
    meals.push({ id: key, ...data[key] });
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {meals.map((meal) => (
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
