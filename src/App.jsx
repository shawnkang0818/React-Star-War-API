import { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

import ShipList from './pages/ShipList/ShipList'
import ShipDetailsWithoutLocationHook from './pages/ShipDetailsWithoutLocationHook/ShipDetailsWithoutLocationHook'
import ShipDetailsWithLocationHook from './pages/ShipDetailsWithLocationHook/ShipDetailsWithLocationHook'
import Nav from './components/Nav/Nav'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
      <Routes>
        <Route path='/ships' element={<ShipList />} />
        <Route path='/ships/:shipId' element={<ShipDetailsWithoutLocationHook />} />
        <Route path='/ships/details' element={<ShipDetailsWithLocationHook />} />
      </Routes>
    </>
  )
}

export default App
