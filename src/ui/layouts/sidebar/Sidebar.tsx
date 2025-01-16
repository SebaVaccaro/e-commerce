import { useState } from "react"
import { Menu } from "../../components/buttons/btnMenu/Menu"
import "./sidebar.css"
import { SidebarContiner } from "../../containers/sidebar/SidebarContainer"
interface sidebar{
    changeState: ()=>void
}
export const Sidebar:React.FC<sidebar> = () =>{
    const [state, setState] = useState<boolean>(false)
    const changeState = ()=> setState(!state)
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