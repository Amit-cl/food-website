import React, { useEffect, useState } from "react";
import Shimmer from "./Shimer";
// import "./RestaurantMenu.css";

const RestaurantMenu = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = async () => {
    const mealPromises = [];
    for (let i = 0; i < 6; i++) { // fetch 6 random meals
      mealPromises.push(
        fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(res => res.json())
      );
    }

    const results = await Promise.all(mealPromises);
    const formattedMeals = results.map(r => {
      const meal = r.meals[0];
      return {
        id: meal.idMeal,
        name: meal.strMeal,
        category: meal.strCategory,
        area: meal.strArea,
        image: meal.strMealThumb,
        instructions: meal.strInstructions,
        price: Math.floor(Math.random() * 500) + 100, // random price ₹100-₹600
      };
    });

    setMeals(formattedMeals);
    setLoading(false);
  };

  if (loading) return <Shimmer />;

  return (
    <div className="menu-grid">
      {meals.map(meal => (
        <div key={meal.id} className="meal-card">
          <img src={meal.image} alt={meal.name} className="meal-image" />
          <div className="meal-info">
            <h3>{meal.name}</h3>
            <p className="meal-meta">
              🍽 {meal.category} | 🌍 {meal.area}
            </p>
            <p className="meal-price">₹{meal.price}</p>
            <p className="meal-instructions">
              {meal.instructions.substring(0, 100)}...
            </p>
            <button className="add-btn">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
