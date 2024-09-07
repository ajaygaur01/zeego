import React from 'react'
import { Routes , Route } from 'react-router'
import Homepage from './pages/home'
import Roompage from './pages/room'
const App = () => {
  return (
   <div>
<Routes>

<Route path='/' element={<Homepage></Homepage>}>  </Route>
<Route path='/room/:roomid' element={<Roompage></Roompage>}>  </Route>
</Routes>
   </div>
  )
}

export default App
