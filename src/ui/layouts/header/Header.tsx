import { Entrar } from "../../components/buttons/btnEntrar/Entrar"
import { MinCarrito } from "../../components/buttons/btnMinCarrito/MinCarrito"
import { MinFavoritos } from "../../components/buttons/btnMinFavoritos/MinFavoritos"
import { Sidebar } from "../sidebar/Sidebar"
import "./header.css"
export const Header = () =>{
    return(
        <header className="header">
            <Sidebar/>
            <Entrar/>
            <MinFavoritos/>
            <MinCarrito/>
        </header>
    )
}