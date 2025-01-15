import { CartButton } from "../buttons/header/card/CartButton"
import { FavoritesButton } from "../buttons/header/favorites/FavoritesButton"
import { Login } from "../buttons/header/user/Login"
import { Sidebar } from "../sidebar/Sidebar"
import "./header.css"
export const Header = () =>{
    return(
        <nav className="header">
            <Sidebar/>
                <span className="name-header">E-COMMERCE</span>
            <Login/>
            <FavoritesButton/>
            <CartButton/>
        </nav>
    )
}