
import React from "react";
//import './../styles/App.css';
import {useState} from 'react'
const App = () => {
  const [itemName,setItemName]=useState('')
  const [itemPrice,setItemPrice]=useState('')
  const [itemList,setItemList]=useState([])

  let handleName=(e)=>{
    setItemName(e.target.value)
  }
  let handlePrice=(e)=>{
    setItemPrice(e.target.value);
  }

  let addItem=()=>{
    setItemList([...itemList,{name:itemName,price:itemPrice}])
    setItemName("")
    setItemPrice("")
  }
  let removeItem=(index)=>{
    let updatedList=[...itemList]
    updatedList.splice(index,1)
    setItemList(updatedList);
  }
  return (
    <div>
        <div>
        <input type="text" onChange={handleName} value={itemName}/>
        <input type="number" onChange={handlePrice} value={itemPrice}/>
        <button type="submit" onClick={addItem} >AddItem</button>
        </div>
        <div>
          <ul>
            {
              itemList.map((value,index)=>(
                <li key={index}>{value.name} ${value.price}
                <button onClick={()=>{removeItem(index)}}>Remove Item</button>
                </li>
              ))
            }
          </ul>
        </div>

    </div>
  )
}

export default App
