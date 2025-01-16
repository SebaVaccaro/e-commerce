import { useState } from "react"
import { Menu } from "../../components/buttons/btnMenu/Menu"
import "./sidebar.css"
import { SidebarContiner } from "../../containers/sidebar/SidebarContainer"
export const Sidebar = () =>{
    const [state, setState] = useState<boolean>(false)
    const setFunction = ()=> setState(!state)
    return(
        <div className="sidebar">
            <div 
                className="sidebar-menu-button"
                onClick={setFunction}
            >
                <Menu/>
            </div>
            {
                state && <SidebarContiner/>
            }
        </div>
    )
}