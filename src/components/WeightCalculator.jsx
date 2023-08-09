import { useContext } from "react";
import { PackContext } from "../packContext";

export default function WeightCalculator() {

  const { 
    packWeight,
    setPackWeight,
    unit,
    setUnit,
    unitConversion

    } = useContext(PackContext);

  return (
    <div>
      <h3> whats your pack weight?</h3>

      <label>
        <input
          value={(packWeight * unitConversion[unit]).toFixed(2)}
          type="number"
          onChange={(e) =>
            setPackWeight(e.target.value / unitConversion[unit])
          }
        />
        <select value={unit} onChange={(e) => setUnit(e.target.value)}>
          <option value="grams">Grams</option>
          <option value="kgs">Kilograms</option>
          <option value="oz">Ounces</option>
          <option value="lbs">Pounds</option>
        </select>
      </label>
      <h3> pack weight with food </h3>
    </div>
  );
}
