
import './App.css';
import { useState } from 'react';
// קישורים לקומפוננטות
import Products from './components/Products';
import Coins from './components/Coins';
import Excess from './components/Excess';
import Massage from './components/Massage';
import Result from './components/Result';
import UserBoard from './components/UserBoard';
import Wallet from './components/Wallet';

function App() {
  // יצירת מערך הממתקים
  const [drinks,setDrinks]=useState([
    {id:1,code:100,name:"cocaCola",price:10},
    {id:2,code:101,name:"sevenUp",price:8},
    {id:3,code:102,name:"orange",price:8},
    {id:4,code:103,name:"water",price:7},

  ])
  


  return <>
  <div>
  {/* תגית הקומפוננטה של המשקאות */}
  <div className="left">
  <Products list={drinks} />
    </div>


  </div>
  </>

    
  
}

export default App;
