import { createContext } from 'react'
import './App.css'
import ChildA from './components/ChildA'
import ChildB from './components/ChildB'

const data = createContext()
const data1 = createContext()
function App() {
  const user = {
    name: "Balkishun",
    age: "22"
  }

  const pass = "uoehrug"
  return (
    <data.Provider value={user}>
      <data1.Provider value={pass}>
        <ChildA/>
      </data1.Provider>
    </data.Provider>
  )
}

export default App
export {data, data1}
