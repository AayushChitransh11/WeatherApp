import { useState } from 'react'
import './App.css'
import Weather from './Components/Weather'
function App() {
  

  return (
    <>
      <div className="App">
        <header className='App-header'>
          <h1>Weather App</h1>
          <Weather />
        </header>
      </div>
    </>
  )
}

export default App
