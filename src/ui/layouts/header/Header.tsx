import { Link } from "react-router-dom"
import { Entrar } from "../../components/buttons/btnEntrar/Entrar"
import { LogoPagina } from "../../components/buttons/btnLogoPagina/LogoPagina"
import { MinCarrito } from "../../components/buttons/btnMinCarrito/MinCarrito"
import { MinFavoritos } from "../../components/buttons/btnMinFavoritos/MinFavoritos"
import { Sidebar } from "../sidebar/Sidebar"
import "./header.css"
export const Header = () => {
    return (
        <header className="header">
            <div className="sidebar-container-header">
                <Sidebar />
            </div>
            <Link to='/'>
                <LogoPagina/>
            </Link>
            <div className="user-container-header">
                <Link to='/login' >
                    <Entrar />
                </Link>
                <MinFavoritos />
                <MinCarrito />
            </div>
        </header>
    )
}