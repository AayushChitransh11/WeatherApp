import { useState } from 'react'
import './App.css'
import Weather from './Components/Weather'
function App() {
  

  return (
    <>
      {/* <div className="App">
        <header className='App-header'>
          <h1>Weather App</h1>
          <Weather />
        </header>
      </div> */}
      <div className="App">
  <div className="App-header">
    <h1>Weather App</h1>
    <div className="form-container">
      <input type="text" placeholder="Enter city..." />
      <button>Search</button>
    </div>
    {/* Weather data here */}
  </div>
</div>
    </>
  )
}

export default App
