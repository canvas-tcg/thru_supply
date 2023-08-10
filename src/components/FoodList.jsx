import { useContext } from "react";
import { PackContext } from "../packContext";


export default function FoodList() {

    const { add } = useContext(PackContext)


  const foods = [
    { name: "Snickers Bar", calories: 250 },
    { name: "Knorr Pasta Side: Cheesy Cheddar", calories: 450 },
    { name: "StarKist Tuna w/ Olive Oil", calories: 180 },
    { name: "Cashews", calories: 553 },
    { name: "Peanuts", calories: 567 },
    { name: "Peanut Butter", calories: 588 },
    { name: "Cheddar Cheese", calories: 400 },
    { name: "Olive Oil", calories: 884 },
    { name: "Almonds", calories: 576 },
    { name: "Salami", calories: 336 },
  ];
  return (
    <div className="food-list">
      {foods.map((food, idx) => (
        <div key={idx}>
          {food.name}- calories: {food.calories}
          <button onClick={() => add(food)}>add to pack</button>
        </div>
      ))}
    </div>
  );
}
