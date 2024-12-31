import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    name : "mohd salman",
    age : 25,
    country : "india"
  }
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 p-4 mb-4'>New Project</h1>
      <Card userName="chaiaurcode" btnText="click me" newObj= {myObj} />
      <Card  userName="mohd salman" />
      
    </>
  )
}

export default App
