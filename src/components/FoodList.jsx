import { useContext, useState } from "react";
import { PackContext } from "../packContext";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./FoodList.css";

export default function FoodList() {
  const { add } = useContext(PackContext);


  const foods = [
    { name: "Snickers Bar", calories: 250, weight: 52 },
    { name: "Knorr Pasta Side: Cheesy Cheddar", calories: 450, weight: 121 },
    { name: "StarKist Tuna w/ Olive Oil", calories: 180, weight: 74 },
    {
      name: "Carnation Breakfast Essentials: Chocolate",
      calories: 140,
      weight: 36,
    },
    { name: "Clif Builder Bar: Choc mint", calories: 280, weight: 68 },
    { name: "Peanut Butter, Jar", calories: 2660, weight: 462 },
    { name: "Flour Tortilla, single", calories: 120, weight: 40 },
    { name: "Instant Oats, single pack", calories: 160, weight: 43 },
    { name: "Sour Patch Kids, packet", calories: 1300, weight: 362 },
    { name: "Lays Kettle Cooked Chips", calories: 1200, weight: 226 },
  ];

  const [list, updateList] = useState(foods);

  function handleOnDragEnd(result) {
    if (!result.destination) return

    const items = Array.from(list)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    updateList(items)

    if (result.destination.droppableId === 'foodItems'){
      handleItemDropped(reorderedItem)
    }
  }

  const handleItemDropped = (food) => {
    console.log('item dropped into bag')
    // add(food)

  }

  

  return (
    <div className="food-list">
      <h3>Grocery items</h3>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="foodItems">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {list.map((food, idx) => (
                <Draggable key={food.name} draggableId={food.name} index={idx}>
                  {(provided) => (
                    <p
                      className="food-item"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      onClick={() => add(food)}
                      onDrop={() => handleItemDropped(food)}
                    >
                      {food.name}- {food.calories} cals
                    </p>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}