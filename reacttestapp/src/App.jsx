import { useEffect, useState } from "react"
import { produce, pantryItems } from "./storeItems"
import ItemList from "./ItemList"


function App() {
  const [ cart, setCart ] = useState([])
  const [ count, setCount ] = useState(0)

  const addItem = (item) => {
    setCart((prev) => [item, ...prev])
    setCount(prev => prev + 1)
  }
  const removeItem = (targetIndex) => {
    setCart((prev) => prev.filter((item, index) => index !== targetIndex))
  }
  const handleClick = (index) => {
    removeItem(index);
    setCount(prev => prev - 1)
  }
  

  return (
    <>
      <h1>Grocery</h1>
      <p>{count === 0 ? "No items in cart" : "Items in cart: " + count}</p>
        <ul>
          {cart.map((item, index) => (
            <li key={index} onClick={() => handleClick(index)}>{item}</li>
          ))}
        </ul>
      <h1>Produce</h1>
      <ItemList items={produce} onItemClick={addItem} />
      <h1>Pantry Items</h1>
      <ItemList items={pantryItems} onItemClick={addItem} />
    </>
  )
}

export default App;
