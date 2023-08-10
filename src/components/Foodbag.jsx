import './Foodbag.css'
// import foodbag from '../foodbag.jpg'
import foodbags from '../foodbags.png'
// import bag from '../bag.png'
export default function Foodbag() {
    return(
        <div>
         <img className='food-bag-img' src={foodbags} alt="dyneema foodbag" />
        </div>
    )
}