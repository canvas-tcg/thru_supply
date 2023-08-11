import { useContext, useEffect } from "react";
import { PackContext } from "../packContext";
import unitConverter from "./unitConverter";
import './WeightCalculator.css'

export default function WeightCalculator() {
  const {
    packWeight,
    setPackWeight,
    currentUnit,
    setCurrentUnit,
    packedFood,
    currentFoodUnit,
    setCurrentFoodUnit,
    foodWeight,
    setFoodWeight,
    foodWeightInUnit,
    setFoodWeightInUnit
    
  } = useContext(PackContext);

  const weightOfFood = packedFood
    .map((food) => food.weight)
    .reduce((acc, grams) => acc + grams, 0);
  setFoodWeight(weightOfFood);

  useEffect(() => {
    const convertedFoodWeight = unitConverter('grams', weightOfFood, currentFoodUnit).toFixed(2)
    setFoodWeightInUnit(convertedFoodWeight)
  }, [weightOfFood, currentFoodUnit])

  function handlePackWeightChange(e) {
    const newUnit = e.target.value;
    setCurrentUnit(newUnit);
    setPackWeight(unitConverter(currentUnit, packWeight, newUnit).toFixed(2));
  }

  function handleFoodWeightChange(e) {
    const newUnit = e.target.value;
    setCurrentFoodUnit(newUnit);
    const convertedFoodWeight = unitConverter('grams', weightOfFood, newUnit)
    setFoodWeightInUnit(convertedFoodWeight)
  }

  function totalWeight() {

    const convertedPackWeight = parseFloat(unitConverter(currentUnit, packWeight, "grams"))

    const totalCombinedWeight = convertedPackWeight + parseFloat(foodWeightInUnit);
    const totalWeightInCurrentUnit = unitConverter("grams", totalCombinedWeight, currentUnit).toFixed(2);

    return totalWeightInCurrentUnit;
  }

  return (
    <div>
      <h4>
        your food weighs {foodWeightInUnit} {currentFoodUnit}
        </h4>
  
        <select 
        className="change-food-unit"
        value={currentFoodUnit} onChange={handleFoodWeightChange}>
          <option value="grams">grams</option>
          <option value="oz">oz</option>
          <option value="kgs">kgs</option>
          <option value="lbs">lbs</option>
        </select>
      
      <h3> whats your base weight?</h3>

      <label>
        <input
        className="base-weight-input"
          value={packWeight}
          type="text"
          // onChange={handleChange}
          onChange={(e) => setPackWeight(e.target.value)}
        />
        <select 
        className="change-pack-unit"
        value={currentUnit} onChange={handlePackWeightChange}>
          <option value="kgs">kgs</option>
          <option value="grams">grams</option>
          <option value="lbs">lbs</option>
          <option value="oz">oz</option>
        </select>
      </label>
      <h3> pack weight with food is {totalWeight()} {currentUnit}</h3>
    </div>
  );
}
