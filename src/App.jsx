import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { EstateServices } from './pages/EstateServices'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/EstateServices" element={<EstateServices/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App
