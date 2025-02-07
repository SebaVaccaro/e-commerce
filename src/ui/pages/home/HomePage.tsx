import "./home-page.css"
import zonaAmd from "../../../assets/zona-amd.jpg"
import zonaNvidea from "../../../assets/zona-nvidia.jpg"
import equiposAmd from "../../../assets/equipos-amd.jpg"
import equiposIntel from "../../../assets/equipos-armados-intel.jpg"
import { Link } from "react-router-dom"

export const HomePage = () =>{
    return(
        <div className="home-page">
            <Link to='/componentes/tarjetas-graficas/amd'>
            <div className="home-page-image-body">
                <img className="home-page-img" src={zonaAmd} alt="imagen" />
            </div>
            </Link>
            <Link to='/componentes/tarjetas-graficas/nvidia'>
            <div className="home-page-image-body">
                <img className="home-page-img" src={zonaNvidea} alt="imagen" />
            </div>
            </Link>
            <Link to='/componentes/equipos'>
            <div className="home-page-image-body">
                <img className="home-page-img" src={equiposAmd} alt="imagen" />
            </div>
            </Link>
            <Link to='/componentes/equipos'>
            <div className="home-page-image-body">
                <img className="home-page-img" src={equiposIntel} alt="imagen" />
            </div>
            </Link>
        </div>
    )
}