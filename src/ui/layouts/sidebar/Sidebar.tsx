import { useState } from "react"
import { Menu } from "../../components/buttons/btnMenu/Menu"
import "./sidebar.css"
import { SidebarContiner } from "../../containers/sidebar/SidebarContainer"

type changeStateType = () => void

export const Sidebar = () =>{
    const [state, setState] = useState<boolean>(false)
    const changeState: changeStateType = ()=> setState(!state)
    return(
        <div className="sidebar">
            <div 
                className="sidebar-menu-button"
                onClick={changeState}
            >
                <Menu/>
            </div>
            {
                state && <SidebarContiner changeState={changeState}/>
            }
        </div>
    )
}