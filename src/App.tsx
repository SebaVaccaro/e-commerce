import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './ui/layouts/header/Header'
import { HomePage } from './ui/pages/home/HomePage'
import { LoginPage } from './ui/pages/auth/login/LoginPage'
import { RegisterPage } from './ui/pages/auth/register/RegisterPage'
import { ProductPage } from './ui/pages/products/ProductPage'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/componentes/procesadores' element={<ProductPage />} />
        <Route path='/componentes/procesadores/intel' element={<ProductPage  />}/>
        <Route path='/componentes/procesadores/amd' element={<ProductPage />} />
        <Route path='/componentes/placa-madre' element={<ProductPage />} />
        <Route path='/componentes/placa-madre/intel' element={<ProductPage />} />
        <Route path='/componentes/placa-madre/amd' element={<ProductPage />} />
        <Route path='/componentes/equipos' element={<ProductPage/>}/>
        <Route path='/componentes/tarjetas-graficas' element={<ProductPage />} />
        <Route path='/componentes/tarjetas-graficas/amd' element={<ProductPage />} />
        <Route path='/componentes/tarjetas-graficas/nvidia' element={<ProductPage />} />
        <Route path='/componentes/tarjetas-graficas/intel' element={<ProductPage />} />
      </Routes>
    </>
  )
}

export default App
