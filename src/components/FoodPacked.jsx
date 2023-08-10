import { useContext } from "react";
import { PackContext } from "../packContext";

export default function FoodPacked() {

  const { 
    packedFood,
    add, 
    reduceByOne,
    reduceByAll 
  } = useContext(PackContext);

  const groupedFood = packedFood.reduce((acc, food) => {
    acc[food.name] = acc[food.name]
      ? { ...acc[food.name], quantity: acc[food.name].quantity + 1 }
      : { food: food, quantity: 1 };
      
    return acc;
  }, {});

  return (
    <div className="packed-list">
      {Object.values(groupedFood).map((group, idx) => (
        <div key={idx}>
          {group.food.name} - calories: {group.food.calories} - qty: {group.quantity}
          <button onClick={() => add(group.food)}>
            +
          </button>
          <button onClick={() => reduceByOne(group.food.name)}>
            -
          </button>
          <button onClick={() => reduceByAll(group.food.name)}>clear</button>
        </div>
      ))}
    </div>
  );
}