import './Foodbag.css'
import foodbag from '../foodbag.png'
import { useContext } from "react";
import { PackContext } from "../packContext";
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

export default function Foodbag({ onDrop }) {
    const { add } = useContext(PackContext);
    const handleDrop = (e) => {
        e.preventDefault(
            onDrop()
        )
    }

    return(
        <div>
            <DragDropContext>
            <Droppable droppableId="foodItems">
            {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}
            onDrop={handleDrop}
            >
         <img className='food-bag-img' src={foodbag} alt="a crinkled dyneema foodbag" />
         {provided.placeholder}
         </div>
            )}
         </Droppable>
            </DragDropContext>
        </div>
    )
}
