import React from 'react'

const DarkModeToggle = ({darkMode, setDarkMode}) => {
 
  return (
    <button onClick = {() => setDarkMode(!darkMode)}> {darkMode ? 'Toggle LightMode' : 'Toggle DarkMode'} </button>
    
  )
}

export default DarkModeToggle
