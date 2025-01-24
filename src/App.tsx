import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './ui/layouts/header/Header'
import { HomePage } from './ui/pages/home/HomePage'
import { LoginPage } from './ui/pages/auth/login/LoginPage'
import { RegisterPage } from './ui/pages/auth/register/RegisterPage'
import { ProcesadorPage } from './ui/pages/products/procesador/ProcesadorPage'
import { PlacaMadrePage } from './ui/pages/products/placaMadre/PlacaMadre'
import { ProcesadorIntelPage } from './ui/pages/products/procesador/ProcesadorIntelPage'
import { ProcesadorAmdPage } from './ui/pages/products/procesador/ProcesadorAmdPage'
import { PlacaMadreAmdPage } from './ui/pages/products/placaMadre/placaMadreAmdPage'
import { PlacaMadreIntelPage } from './ui/pages/products/placaMadre/PlacaMadreIntelPage'
import { Equipos } from './ui/pages/products/equipos/Equipos'
import { TarjetasGraficas } from './ui/pages/products/tarjetasGraficas/TarjetasGraficas'
import { TarjetasGraficasAmd } from './ui/pages/products/tarjetasGraficas/TarjetasGraficasAmd'
import { TarjetasGraficasIntel } from './ui/pages/products/tarjetasGraficas/TarjetasGraficasIntel'
import { TarjetasGraficasNvidea } from './ui/pages/products/tarjetasGraficas/TarjetasGraficasNvidea'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/componentes/procesadores' element={<ProcesadorPage/>}/>
        <Route path='/componentes/procesadores/intel' element={<ProcesadorIntelPage/>}/>
        <Route path='/componentes/procesadores/amd' element={<ProcesadorAmdPage/>}/>
        <Route path='/componentes/placa-madre' element={<PlacaMadrePage/>}/>
        <Route path='/componentes/placa-madre/intel' element={<PlacaMadreIntelPage/>}/>
        <Route path='/componentes/placa-madre/amd' element={<PlacaMadreAmdPage/>}/>
        <Route path='/componentes/equipos' element={<Equipos/>}/>
        <Route path='/componentes/tarjetas-graficas' element={<TarjetasGraficas/>}/>
        <Route path='/componentes/tarjetas-graficas/amd' element={<TarjetasGraficasAmd/>}/>
        <Route path='/componentes/tarjetas-graficas/nvidea' element={<TarjetasGraficasNvidea/>}/>
        <Route path='/componentes/tarjetas-graficas/intel' element={<TarjetasGraficasIntel/>}/>
      </Routes>
    </>
  )
}

export default App
