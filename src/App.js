import './App.css';
import CalorieCalculator from './components/CalorieCalculator'
import CalorieInput from './components/CalorieInput'
import FoodList from './components/FoodList'
import FoodPacked from './components/FoodPacked'
import WeightCalculator from './components/WeightCalculator'
import Backpack from './components/Backpack'

function App() {
  return (
    <div className="App">
      <h1>thru supply</h1>
      <div className='grid-wrapper'>
        <div>
        <CalorieInput />
        <FoodList />
        </div>
        <div>
        <Backpack />
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
