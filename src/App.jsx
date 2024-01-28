//! Temperature 
import React from 'react'
import { useState } from 'react';
import "./Global.css"

const App = () => {
  let [celsius, setCelsius] = useState("")
  let [farenheit, setfarenheit] = useState("")
  
//! Function for celsius
let handleCelsius = (e)=>{
  let value = e.target.value;
  setCelsius(value);
  setfarenheit((parseFloat(value)*9/5+32).toFixed(2))
}
//! Function for farenheit
let handlefarenheit = (e)=>{
  let value = e.target.value;
  setfarenheit(value);
  setCelsius(((parseFloat(value)-32)*5/9).toFixed(2))
}
  return (
    <div className='main'>
      <h1>Temperature Converter</h1>
      <div>
        <h3>Celsius</h3>
        <input type='number'
        onChange={handleCelsius}
        value={celsius}
        placeholder='Enter your Temperature'/>
      </div>
      <div>
        <h3>Farenheit</h3>
        <input type='number'
        onChange={handlefarenheit}
        value={farenheit}
        placeholder='Enter your Temperature'/>
      </div>
    </div>
  )
}

export default App