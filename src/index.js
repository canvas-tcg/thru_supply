import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { PackProvider } from "./packContext";
import { DragDropContext } from "react-beautiful-dnd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DragDropContext onDragEnd={() => handleDragEnd}>
  <PackProvider>
    <App />
  </PackProvider>
  </DragDropContext> 
);
const handleDragEnd = (result) => {
  console.log(result)
  if (!result.destination) {

    return
}
console.log('hello');
}