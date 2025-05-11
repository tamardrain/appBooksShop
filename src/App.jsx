
import './App.css';
import { useState } from 'react';

function App() {
  
const [books,setbooks]=useState([
  {id:1,name:"איסתרק",price:75,img:"kind.jpg.png"},
  {id:2,name:"מהללהל",price:90,img:"kind2.jpg"},
  {id:3,name:"יוזבד- 2 כרכים",price:110, img:"kind3.jpg"},
  {id:4,name:"פדהאל",price:80, img:"kind4.jpg"}
])
//משתנה שמכיל את המערך המסונן
const [filteredBook,setfilteredBook] =useState(books)
const [nameAdd,setNameAdd]=useState("");
const [priceAdd,setPriceAdd]=useState("");
//אוביקט ששומר את הנתונים החדשים באינפוטים
const addBooks= ()=>{
const newBook={
id:books[books.length-1].id+1,
name:nameAdd,
price:priceAdd}

//כשנרצה להוסיף מוצר למערך נשתמש בפונקציה של המשתנה חיפוש כי זה המערך שמוצג במסך
// יצירת מערך חדש כולל המוצר האחרון שהתווסף
books.push(newBook);
setfilteredBook (  [...books]  )   ;
}
const deleteBook= (id)=>{
const index=books.findIndex(b=>b.id==id);
const arr=[...books];
arr.splice(index,1);
setbooks(arr);
}
//יצירת מערך ריק לעגלה
const [cart,setcart]=useState([]);
const addToCart= (b)=>{
setcart([...cart , b]);
}
//משתנה שיכיל את ערך החיפוש
const [searchVal, setSearchVal]= useState("")
//פונקצית חיפוש
const search=(text)=>{
  setSearchVal(text);
  const filteredArr = books.filter(b=>b.name.includes(text));
  setfilteredBook(filteredArr);
}

const [user, setUser]=useState("")
  return (
    <div className="products">
      
      <h1>👑ממלכה במבחן👑-הסידרה שכבשה לבבות</h1>
      <h2>מאת הסופרת: מ. קינן</h2>
      <h3>{user=="manager"?"נכנסת לאתר כמנהל":user=="user"?"נכנסת לאתר כמשתמש" :"שלום לך!"}</h3>
<hr/>
{/* תגית חיפוש */}
<form> 
  <input id="search" placeholder='חיפוש ספר' onChange={(event)=>search(event.target.value) } value={searchVal}/>
</form>
<button onClick={()=>setUser("manager") }>מנהל מתחבר</button>
<button onClick={()=>setUser("user")}>משתמש מתחבר</button>
<div className='allBooks'>
{/* רינדור מערך */}
  {
    filteredBook.map(b=>
<div className='book' style={{color:b.price<100?"black":"red"}}>
  <p>{b.name}</p>
  <span>{b.price} ש"ח</span><br/>
  <img src={"./" +b.img} />
  <button type='button' onClick={()=>{addToCart(b)}}>הוסף לסל</button>
  <button type='button' onClick={()=>{deleteBook(b.id)}} >X</button>
</div>
    )
  }
  </div>


 { user=="manager" &&   <form>

  <h2>הוספת המוצר </h2>
  <input type='text' placeholder='הכנס שם ספר' value={nameAdd} onChange={(event)=>{ setNameAdd(event.target.value)}}></input>
  <input type='text' placeholder='הכנס מחיר ספר' value={priceAdd} onChange={(event)=>{ setPriceAdd (parseInt(event.target.value))}}></input>
  <button type='button' onClick={()=>{addBooks()}}>הוסף מוצר</button>
</form>} 
<div >
  <h2>עגלה</h2>
  <ul>
{
  cart.length == 0 ?
  <p>העגלה שלך עדיין ריקה😐</p>
  :
  cart.map(b=>
    
      <li>
        <h5>{b.name}:{b.price} ש"ח</h5></li>
    

  )
}
</ul>



</div>

    </div>
    
  );
}

export default App;
