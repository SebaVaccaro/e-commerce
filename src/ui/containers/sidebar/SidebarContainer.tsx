import { MiCarrito } from "../../components/buttons/btnMiCarrito/MiCarrito"
import { MiCuenta } from "../../components/buttons/btnMiCuenta/MiCuenta"
import { MidFavoritos } from "../../components/buttons/btnMidFavoritos/MidFavoritos"
import "./sidebar-container.css"
export const SidebarContiner = () =>{
    return(
        <div className="sidebar-container">
            <div className="sidebar-container-body">
                <div className="sidebar-container-body-header">
                    <MiCuenta/>
                    <MiCarrito/>
                    <MidFavoritos/>
                </div>
                <div className="sidebar-container-body-category">

                </div>
            </div>
            <div className="sidebar-container-no-body">

            </div>
        </div>
    )
}