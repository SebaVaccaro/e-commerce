import { Link } from "react-router-dom"
import { useUserStore } from "../../../state/user/useUserStore"
import { Entrar } from "../../components/buttons/btnEntrar/Entrar"
import { LogoPagina } from "../../components/buttons/btnLogoPagina/LogoPagina"
import { MiCuenta } from "../../components/buttons/btnMiCuenta/MiCuenta"
import { MinCarrito } from "../../components/buttons/btnMinCarrito/MinCarrito"
import { MinFavoritos } from "../../components/buttons/btnMinFavoritos/MinFavoritos"
import { Sidebar } from "../sidebar/Sidebar"
import "./header.css"
export const Header = () => {
    const { user } = useUserStore()
    return (
        <header className="header">
            <div className="sidebar-container-header">
                <Sidebar />
            </div>
            <LogoPagina />
            <div className="user-container-header">
                <div className="cuenta-container-header">
                    {
                        user ? (
                            <Link to="/user">
                                <MiCuenta />
                            </Link>
                        ) : (
                            <Entrar />
                        )
                    }
                </div>
                <div className="favorite-container-header">
                    <MinFavoritos />
                </div>
                <MinCarrito />
            </div>
        </header>
    )
}