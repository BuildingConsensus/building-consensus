import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Layout } from './Layout'

import { Home } from './pages/Home'
import { EstateServices } from './pages/EstateServices'
import './App.css'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/EstateServices" element={<EstateServices/>}/>
          </Route>
        </Routes>
      </Router>
    </>
    
  )
}

export default App
