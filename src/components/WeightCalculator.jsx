import { useContext } from "react";
import { PackContext } from "../packContext";
import unitConverter from "./unitConverter";

export default function WeightCalculator() {

  const { 
    packWeight,
    setPackWeight,
    currentUnit,
    setCurrentUnit,
    packedFood
    
    } = useContext(PackContext);

    const foodWeight = packedFood
    .map((food) => food.weight)
    .reduce((acc, grams) => acc + grams, 0)

    function handleChange(e) {
      const newUnit = e.target.value
      setCurrentUnit(newUnit)
      setPackWeight(unitConverter(currentUnit, packWeight, newUnit))
    }

    function totalWeight() {
      
      // const newUnit = 'grams'
      // const totalPackWeight = (unitConverter(newUnit, foodWeight, currentUnit) + packWeight)
      // return totalPackWeight
      return (packWeight + foodWeight)

    }

   
  return (
    <div>
      <h4 onChange={totalWeight}>your food weighs {foodWeight} grams</h4>
      <h3> whats your pack weight?</h3>

      <label>
        <input
          value={packWeight}
          type="text"
          // onChange={handleChange}
          onChange={(e) => setPackWeight(e.target.value)}
        />
        <select
          value={currentUnit}
          onChange={handleChange}
        >
          <option value="kgs">kgs</option>
          <option value="grams">grams</option>
          <option value="lbs">lbs</option>
          <option value="oz">oz</option>
        </select>
      </label>
      <h3> pack weight with food is {totalWeight()}</h3>
    </div>
  );
}
