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
            <LogoPagina/>
            <div className="user-container-header">
                <Entrar />
                <MinFavoritos />
                <MinCarrito />
            </div>
        </header>
    )
}