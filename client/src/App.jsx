import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Signup from './pages/Signup'
import {ToastContainer } from 'react-toastify'


function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
      <ToastContainer />
    </div>
    
  )
}

export default App
