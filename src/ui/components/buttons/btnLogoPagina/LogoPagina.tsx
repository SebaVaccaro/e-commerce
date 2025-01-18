import "./logo-pagina.css"
import imgLogo from "../../../../assets/gamer-arcade-svgrepo-com.svg"
export const LogoPagina = () => {
    return (
        <div className="logo-pagina">
            <span className="span-logo-pagina">VaccaroStore</span>
            <img className="img-logo-pagina" src={imgLogo} alt="logo de la pagina" />
        </div>
    )
}