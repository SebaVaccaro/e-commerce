import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './ui/layouts/header/Header'
import { HomePage } from './ui/pages/home/HomePage'
import { LoginPage } from './ui/pages/auth/login/LoginPage'
import { RegisterPage } from './ui/pages/auth/register/RegisterPage'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </>
  )
}

export default App
