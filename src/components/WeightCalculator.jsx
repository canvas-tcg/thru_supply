import { useContext } from "react";
import { PackContext } from "../packContext";

export default function WeightCalculator() {

  const { 
    packWeight,
    setPackWeight,
    unit,
    unitConversion,
    setUnit

    } = useContext(PackContext);

   

  return (
    <div>
      <h3> whats your pack weight?</h3>

      <label>
        <input
          value={packWeight}
          type="text"
          onChange={(e) => setPackWeight(e.target.value)}
        />
        <select
          value={unit}
          onChange={(e) => {
            const newUnit = e.target.value;
            const convertedWeight =(packWeight * unitConversion[newUnit]).toFixed(2)
            setUnit(newUnit)
            setPackWeight(convertedWeight)
        }}
        >
          <option value="kgs">kgs</option>
          <option value="grams">grams</option>
          <option value="lbs">lbs</option>
          <option value="oz">oz</option>
        </select>
      </label>
      <h3> pack weight with food </h3>
    </div>
  );
}
