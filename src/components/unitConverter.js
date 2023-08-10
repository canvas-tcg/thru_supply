
export default function unitConverter(unit, weight, newUnit) {
    const unitConversion = {
        kgs: 1.00,
        grams: 1000.00,
        lbs: 2.20462,
        oz: 35.27,
      }
      let newWeight = weight/ unitConversion[unit]
      return (newWeight * unitConversion[newUnit]).toFixed(2)
 
    }

// function unitConverter(unit, weight, newUnit) {
//   const unitConversion = {
//       kgs: 1.00,
//       grams: 1000.00,
//       lbs: 2.20462,
//       oz: 35.27,
//     }
//     let newWeight = weight/ unitConversion[unit]
//     return (newWeight * unitConversion[newUnit]).toFixed(2)

//   }
//   function totalWeight() {
      
//     const newUnit = 'lbs'
//     const foodWeight = '52'
//     const currentUnit = 'grams'
//     const packWeight = 2.2
//     const totalPackWeight = (unitConverter(newUnit, foodWeight, currentUnit) + packWeight)
//     return totalPackWeight

//   }