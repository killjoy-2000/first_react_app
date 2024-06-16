import { useState } from 'react'
import Myheader from './Myheader'
import MybuttonBasic from './MybuttonBasic'
import MyNavbar from './components/Mynavbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyNavbar />
    </>
  )
}

export default App
