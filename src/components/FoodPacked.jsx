import { useContext } from "react";
import { PackContext } from "../packContext";

export default function FoodPacked() {

  const { packedFood, remove, setQuantity } = useContext(PackContext);

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
          <button onClick={() => setQuantity(group.food.name, group.food.quantity += 1)}>
            +
          </button>
          <button onClick={() => setQuantity(group.food.name, group.food.quantity -= 1)}>
            -
          </button>
          <button onClick={() => remove(group.food, idx)}>clear</button>
        </div>
      ))}
    </div>
  );
}