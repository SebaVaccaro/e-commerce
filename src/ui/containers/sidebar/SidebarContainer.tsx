import React from "react"
import { MiCarrito } from "../../components/buttons/btnMiCarrito/MiCarrito"
import { MiCuenta } from "../../components/buttons/btnMiCuenta/MiCuenta"
import { MidFavoritos } from "../../components/buttons/btnMidFavoritos/MidFavoritos"
import "./sidebar-container.css"
import { Close } from "../../components/buttons/btnClose/Close"
import { CategoriaItemContainer } from "../categoriaItem/CategoriaItemContainer"
import { MenuData } from "../../../data/menuData"

interface sidebarContainer{
    changeState: ()=>void
}

export const SidebarContiner:React.FC<sidebarContainer> = ({changeState}) =>{
    return(
        <div className="sidebar-container">
            <div className="sidebar-container-body">
                <div className="sidebar-container-body-header">
                    <MiCuenta/>
                    <MiCarrito/>
                    <MidFavoritos/>
                    <div className="close-button-container" onClick={changeState}>
                        <Close/>
                    </div>
                </div>
                <div className="sidebar-container-body-category">
                    <CategoriaItemContainer data={MenuData}/>
                </div>
            </div>
            <div className="sidebar-container-no-body" onClick={changeState}>

            </div>
        </div>
    )
}