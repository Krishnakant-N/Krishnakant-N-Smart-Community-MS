import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Signup from './pages/Signup'
import {ToastContainer } from 'react-toastify'
import { useState } from 'react'
import RefreshHandler from './components/RefreshHandler'
import Bills from './pages/Bills'
import AuthWrapper from './components/AuthWrapper'


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({element}) => {
    return isAuthenticated ? element : <Navigate to='/login' />
  }

  return (
    <div>
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/home' element={<PrivateRoute  element={
          <AuthWrapper>
            <Home/>
          </AuthWrapper>
        } />} />
        <Route path='/bills' element={<PrivateRoute element={<Bills/>} />} />
      </Routes>
      <ToastContainer />
    </div>
    
  )
}

export default App
