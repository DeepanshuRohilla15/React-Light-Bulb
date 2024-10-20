/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react"

const BulbContext  = createContext();   // create context

function App() {
const [bulbOn, setBulbOn] = useState(true);

  return <div>
    <BulbContext.Provider value={{    // provided the context over here
      bulbOn: bulbOn,
      setBulbOn: setBulbOn
    }}>
      <LightBulb />
    </BulbContext.Provider>
    
  </div>
}

function LightBulb() {
  return <div>
    <BulbState />
    <ToggleBulbState />
  </div>
}

function BulbState() {
  const {bulbOn} = useContext(BulbContext)    // useConext 
  return <div>
    {bulbOn ? "Bulb On" : "Bulb Off"}
  </div>
}

function ToggleBulbState() {
  const {setBulbOn} = useContext(BulbContext)   // useContext
  function toggle() {
    setBulbOn(currentState => !currentState)
  }

  return <div>
    <button onClick={toggle}>Toggle the bulb</button>
  </div>

}


export default App