import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './ui/layouts/header/Header'
import { HomePage } from './ui/pages/home/HomePage'
import { LoginPage } from './ui/pages/auth/login/LoginPage'
import { RegisterPage } from './ui/pages/auth/register/RegisterPage'
import { ProductPage } from './ui/pages/products/ProductPage'
import { UserPage } from './ui/pages/user/UserPage'
import { FullProductPage } from './ui/pages/products/FullProductPage'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/user' element={<UserPage />} />
        <Route path='/componentes/procesadores' element={<ProductPage />} />
        <Route path='/componentes/procesadores/:id' element={<FullProductPage />} />
        <Route path='/componentes/procesadores/intel' element={<ProductPage  />}/>
        <Route path='/componentes/procesadores/amd' element={<ProductPage />} />
        <Route path='/componentes/placa-madre' element={<ProductPage />} />
        <Route path='/componentes/placa-madre/:id' element={<FullProductPage />} />
        <Route path='/componentes/placa-madre/intel' element={<ProductPage />} />
        <Route path='/componentes/placa-madre/amd' element={<ProductPage />} />
        <Route path='/componentes/equipos' element={<ProductPage/>}/>
        <Route path='/componentes/equipos/:id' element={<FullProductPage />} />
        <Route path='/componentes/tarjetas-graficas' element={<ProductPage />} />
        <Route path='/componentes/tarjetas-graficas/:id' element={<FullProductPage />} />
        <Route path='/componentes/tarjetas-graficas/amd' element={<ProductPage />} />
        <Route path='/componentes/tarjetas-graficas/nvidia' element={<ProductPage />} />
        <Route path='/componentes/tarjetas-graficas/intel' element={<ProductPage />} />
      </Routes>
    </>
  )
}

export default App
