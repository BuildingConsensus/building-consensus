import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Layout } from './Layout'

import { Home } from './pages/Home'
import { ElectionAppeals } from './pages/ElectionAppeals'
import './App.css'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/ElectionAppeals" element={<ElectionAppeals/>}/>
          </Route>
        </Routes>
      </Router>
    </>
    
  )
}

export default App
