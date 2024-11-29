import React from 'react'
import { Route , Routes , Link } from 'react-router-dom'
import Home from '../src/pages/Home'
import Previous from '../src/pages/Previous'
import Error from '../src/pages/Error'
import Important from '../src/pages/Important'

function App() {
  return (
   <>
   

   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='important' element={<Important/>}/>
    <Route path='previous' element={<Previous/>}/>
    <Route path='*' element={<Error/>}/>
   </Routes>




   </>
  )
}

export default App
