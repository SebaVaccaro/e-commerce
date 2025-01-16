import { Entrar } from "../../components/buttons/btnEntrar/Entrar"
import { Menu } from "../../components/buttons/btnMenu/Menu"
import { MinCarrito } from "../../components/buttons/btnMinCarrito/MinCarrito"
import { MinFavoritos } from "../../components/buttons/btnMinFavoritos/MinFavoritos"
import "./header.css"
export const Header = () =>{
    return(
        <header className="header">
            <Menu/>
            <Entrar/>
            <MinFavoritos/>
            <MinCarrito/>
        </header>
    )
}