import { createContext, useState, useEffect } from "react";

export const PackContext = createContext()

export function PackProvider (props) {
    const [packedFood, setPackedFood] = useState([])
    const [days, setDays] = useState(0);
    const [cals, setCals] = useState(0);
    const [packWeight, setPackWeight] = useState('0');
    const [currentUnit, setCurrentUnit] = useState('kgs')
    const [currentFoodUnit, setCurrentFoodUnit] = useState('grams')
    const [foodWeight, setFoodWeight] = useState('0')
    const [foodWeightInUnit, setFoodWeightInUnit] = useState('0')

    const unitConversion = {
      kgs: 1.00,
      grams: 1000.00,
      lbs: 2.20462,
      oz: 35.27,
    }

    function add(food){
        setPackedFood((packedFood) => [...packedFood, food])
    }
    
    function remove(targetFood, targetIdx) {
      setPackedFood(packedFood => {
        const updateFood = packedFood.filter((food, idx) => idx !== targetIdx)
      return updateFood
    })
  }
    useEffect(() => {
      }, [packedFood]);

    function changeDays(days){
      setDays((days))
    }
    function changeCals(cals){
      setCals((cals))
    }

    function reduceByOne(name) {
      const indexOfFood = (packedFood.findIndex((food) => food.name === name))
      const updatedFood = [...packedFood.slice(0, indexOfFood), ...packedFood.slice(indexOfFood + 1)];
      setPackedFood(updatedFood)
    }

    function reduceByAll(name) {
      const updatedFood = packedFood.filter((food) => food.name !== name)
      setPackedFood(updatedFood)
    }

    function changePackWeight(e){
      const weight = e.target.value
      setPackWeight(weight)
      console.log(weight);
    }
    // function changeUnit(e) {
    //   const newUnit = e.target.value;
    //   const convertedWeight = (packWeight * unitConversion[newUnit]).toFixed(2);
    //   setUnit(newUnit);
    //   setPackWeight(convertedWeight);
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
        currentUnit,
        setCurrentUnit,
        unitConversion,
        reduceByOne,
        reduceByAll,
        changePackWeight,
        currentFoodUnit,
        setCurrentFoodUnit,
        foodWeight,
        setFoodWeight,
        foodWeightInUnit, setFoodWeightInUnit
        
        
      }

      return (
        <PackContext.Provider value={value}>
            {props.children}
        </PackContext.Provider>
      )
}
