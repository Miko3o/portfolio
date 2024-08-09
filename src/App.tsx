
import { Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home'
import { ThreeJsCanvas } from './components/ThreeJsCanvas';

import './components/ThreeJsCanvas.css'


import './App.css'

function App() {


  return (
    <>
      <div className='body'>
          <Routes>    
              <Route path="/" element={<Home />} />
          </Routes>
          <div className='canvas'>
            <ThreeJsCanvas />
          </div>
      </div>
    </>
  )
}

export default App
