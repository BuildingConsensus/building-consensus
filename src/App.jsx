import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { EstateServices } from './pages/EstateServices'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/EstateServices" element={<EstateServices/>}/>
      </Routes>
    </Router>
  )
}

export default App
