import { useState } from 'react'
import Myheader from './Myheader'
import MybuttonBasic from './MybuttonBasic'
import MyNavbar from './components/Mynavbar'
import Mytextfield from './components/Mytextfield'
import Mycontainer from './components/Mycontainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyNavbar />      
      <Mycontainer>
        <Mytextfield />
      </Mycontainer>      
    </>
  )
}

export default App
