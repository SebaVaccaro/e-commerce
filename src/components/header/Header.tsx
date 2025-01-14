import { CategoryButton } from "../buttons/header/category/CategoryButton"
import { Login } from "../buttons/header/user/Login"
import "./header.css"
export const Header = () =>{
    return(
        <nav className="header">
            <CategoryButton/>
            <span className="name-header">E-COMMERCE</span>
            <Login/>
        </nav>
    )
}