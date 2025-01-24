import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './ui/layouts/header/Header'
import { HomePage } from './ui/pages/home/HomePage'
import { LoginPage } from './ui/pages/auth/login/LoginPage'
import { RegisterPage } from './ui/pages/auth/register/RegisterPage'
import { ProductPage } from './ui/pages/product/ProductPage'
import { cpus } from './data/cpus'
import { mothers } from './data/mothers'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/componentes/procesadores' element={<ProductPage data={cpus}/>}/>
        <Route path='/componentes/placa-madre' element={<ProductPage data={mothers}/>}/>
      </Routes>
    </>
  )
}

export default App
