import { createContext, useState, useEffect } from "react";

export const PackContext = createContext()

export function PackProvider (props) {
    const [packedFood, setPackedFood] = useState([])
    // const [qty, setQty] = useState(0)
    const [days, setDays] = useState(0);
    const [cals, setCals] = useState(0);
    const [packWeight, setPackWeight] = useState(0);
    const [unit, setUnit] = useState('kgs')

    const unitConversion = {
      kgs: 1.00,
      grams: 1000.00,
      oz: 35.27,
      lbs: 2.20462,
    }

    function add(food){
        setPackedFood((packedFood) => [...packedFood, food])
    }
  //   function add(food){
  //     setPackedFood((packedFood) => [...packedFood, {...food, qty: 1}])
  // }
    
    function remove(targetFood, targetIdx) {
      setPackedFood(packedFood => {
        const updateFood = packedFood.filter((food, idx) => idx !== targetIdx)
      return updateFood
    })
  }
    useEffect(() => {
        console.log(packedFood);
      }, [packedFood]);

    function changeDays(days){
      setDays((days))
    }
    function changeCals(cals){
      setCals((cals))
    }

    function setQuantity(foodName, newQty) {
      console.log(foodName, newQty)
      // console.log(typeof(newQty));
      setPackedFood((packedFood) => 
      
      packedFood.map((food) =>
      food.name === foodName? {...food, qty: newQty } : food
      )
      )
      console.log(packedFood);
      // setQty(packedFood.qty)
    }

    // function changePackWeight(packWeight){
    //   setPackWeight((packWeight))
    //   console.log(packWeight);
    // }

      const value = {
        packedFood,
        add,
        changeDays,
        days,
        changeCals,
        cals,
        remove,
        packWeight,
        setPackWeight,
        unit,
        setUnit,
        unitConversion,
        setQuantity,
        // qty,
        // setQty
      }

      return (
        <PackContext.Provider value={value}>
            {props.children}
        </PackContext.Provider>
      )
}
