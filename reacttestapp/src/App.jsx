import { useEffect, useState } from "react"
import { produce, pantryItems } from "./storeItems"
import ItemList from "./ItemList"


function App() {
  const [ cart, setCart ] = useState([])
  const [ count, setCount ] = useState(0)

  const addItem = (item) => {
    setCart((prev) => [item, ...prev]);
  }
  const removeItem = (targetIndex) => {
    setCart((prev) => prev.filter((item, index) => index !== targetIndex))
  }
  const handleClick = (index) => {
    removeItem(index);

  }
  

  return (
    <>
      <h1>Grocery</h1>
      <p>{count}</p>
        <ul>
          {cart.map((item, index) => (
            <li key={index} onClick={handleClick(index)}>{item}</li>
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
