import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Page/Login'
import Home from './Page/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
