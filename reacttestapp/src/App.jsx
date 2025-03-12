import { useState } from "react"
import { produce, pantryItems } from "./storeItems"
import ItemList from "./ItemList"


function App() {
  const [ cart, setCart ] = useState([])

  const addItem = (item) => {
    setCart((prev) => [item, ...prev]);
  }
  const removeItem = (targetIndex) => {
    setCart((prev) => prev.filter((item, index) => index !== targetIndex))
  }
  return (
    <>
      <h1>Grocery</h1>
        <ul>
          {cart.map((item, index) => (
            <li key={index} onClick={() => removeItem(index)}>{item}</li>
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
