import { useContext } from "react";
import { PackContext } from "../packContext";


export default function CalorieCalculator() {
    const {
        days,
        cals,
        packedFood
        
      } = useContext(PackContext);

    const calsNeeded = cals * days
    // console.log(calsNeeded);

    const calsTotal = packedFood
    .map((food) => food.calories)
    .reduce((acc, cals) => acc + cals, 0)

    const calsRemain = calsNeeded - calsTotal

    return(
        
        <div>
           <h3> You need {calsNeeded.toLocaleString()} calories </h3>
           <h3> You have {calsTotal.toLocaleString()} calories </h3>
           <h3>You still need {calsRemain.toLocaleString()} calories</h3>
           

        </div>
    )
}