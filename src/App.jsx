import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {

  const [darkMode, setDarkMode] = useState(false)

  const [cart, setCart] = useState([])

  const AddCart = (product) => {
    setCart([...cart,product])

  }


  const [category, setCategory] = useState('all')

  // TODO: Implement state for category filtering

  return (
    <div className= {darkMode ? 'dark' : 'light'} > 

      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p> 
      
      <div>
         <DarkModeToggle darkMode = {darkMode} setDarkMode ={setDarkMode}/>
      </div>

      
      

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select 
    
      value={category}
      onChange={(e) => setCategory(e.target.value)}
     >
      <option value="all">All</option>
     <option value="Fruits">Fruits</option>
     <option value="Dairy">Dairy</option>
    </select> 

      <ProductList category = {category} AddCart = {AddCart}/>

      <Cart cart = {cart}/>
    </div>
  )
}

export default App
