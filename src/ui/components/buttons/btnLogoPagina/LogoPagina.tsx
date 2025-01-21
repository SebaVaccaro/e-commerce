import "./logo-pagina.css"
import imgLogo from "../../../../assets/gamer-arcade-svgrepo-com.svg"
import { Link } from "react-router-dom"
export const LogoPagina = () => {
    return (
        <Link to='/'>
        <div className="logo-pagina">
            <div className="span-container-logo-pagina">
                <span className="span-logo-pagina">Vaccaro</span>
                <span className="span-logo-pagina">Store</span>
            </div>
            <img className="img-logo-pagina" src={imgLogo} alt="logo de la pagina" />
        </div>
        </Link>
    )
}