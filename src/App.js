
import './App.css';
import { useState } from 'react';

function App() {

const [books,setbooks]=useState([
  {id:1,name:"איסתרק",price:75},
  {id:2,name:"מהללהל",price:90},
  {id:3,name:"יוזבד- 2 כרכים",price:110},
  {id:4,name:"פדהאל",price:80}
])
const [nameAdd,setNameAdd]=useState("");
const [priceAdd,setPriceAdd]=useState("");
//אוביקט ששומר את הנתונים החדשים באינפוטים
const addBooks= ()=>{
const newBook={
id:books[books.length-1].id+1,
name:nameAdd,
price:priceAdd}

//יצירת מערך חדש כולל המוצר האחרון שהתווסף
setbooks (  [...books , newBook ]  )   ;
}
const deleteBook= (id)=>{
const index=books.findIndex(b=>b.id==id);
const arr=[...books];
arr.splice(index,1);
setbooks(arr);
}
//יצירת מערך ריק לעגלה
const [cart,setcart]=useState("");
const addToCart= (id)=>{
const newb=//איך מעדכנים את הספר החדש בעגלה?
// ??????
  
  


setcart([...cart , newb]);
}
  return (
    <div className="products">
      
      <h1>👑ממלכה במבחן👑-הסידרה שכבשה לבבות</h1>
      <h2>מאת הסופרת: מ. קינן</h2>
<hr/>
<div className='allBooks'>
{/* רינדור מערך */}
  {
    books.map(b=>
<div className='book'>
  <p>{b.name}</p>
  <span>{b.price} ש"ח</span><br/>
  <button type='button' onClick={()=>{addToCart(b.id)}}>הוסף לסל</button>
  <button type='button' onClick={()=>{deleteBook(b.id)}} >X</button>
</div>
    )
  }
  </div>
{/* 
<div className='book'>
  <p></p>
  <span></span>
  <button type='button'>הוסף לסל</button>
</div>
<div className='book'>
  <p></p>
  <span></span>
  <button type='button'>הוסף לסל</button>
</div>
<div className='book'>
  <p></p>
  <span></span>
  <button type='button'>הוסף לסל</button>
</div> */}

<form>
  <h2>הוספת המוצר </h2>
  <input type='text' placeholder='הכנס שם ספר' value={nameAdd} onChange={(event)=>{ setNameAdd(event.target.value)}}></input>
  <input type='text' placeholder='הכנס מחיר ספר' value={priceAdd} onChange={(event)=>{ setPriceAdd (parseInt(event.target.value))}}></input>
  <button type='button' onClick={()=>{addBooks()}}>הוסף לעגלה</button>
</form>
<div>
  <h2>עגלה</h2>
</div>
<ul>
  <li>פריט</li>
  <li>פריט</li>
  <li>פריט</li>
</ul>
    </div>
    
  );
}

export default App;
