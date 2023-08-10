import './App.css';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import CalorieCalculator from './components/CalorieCalculator'
import CalorieInput from './components/CalorieInput'
import FoodList from './components/FoodList'
import FoodPacked from './components/FoodPacked'
import WeightCalculator from './components/WeightCalculator'
import Header from './components/Header';
import Foodbag from './components/Foodbag';

function App() {
  return (
    <div className="App">
        <Header />
      <div className='grid-wrapper'>
        <div>
        <CalorieInput />
        <FoodList />
        </div>
        <div>
        <Foodbag />
        </div>
        <div>
        <CalorieCalculator />
        <WeightCalculator />
        <FoodPacked />
        </div>
      </div>

    </div>
  );
}

export default App;
