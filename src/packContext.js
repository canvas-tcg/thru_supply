import { createContext, useState, useEffect } from "react";

export const PackContext = createContext()

export function PackProvider (props) {
    const [packedFood, setPackedFood] = useState([])

    function add(food){
        setPackedFood((packedFood) => [...packedFood, food])
    }
    
    useEffect(() => {
        console.log(packedFood);
      }, [packedFood]);

      const value = {
        packedFood,
        add
      }

      return (
        <PackContext.Provider value={value}>
            {props.children}
        </PackContext.Provider>
      )
}

