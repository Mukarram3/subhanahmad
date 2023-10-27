import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Contact from './Components/Contact/Contact'
import MyBody from './Components/MyBody/MyBody'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>  
     <Route path='/' element={<MyBody/>}/>
      <Route path='/Contact' exact element={<Contact />} />
     </Routes> 

     
    </>
  )
}

export default App
