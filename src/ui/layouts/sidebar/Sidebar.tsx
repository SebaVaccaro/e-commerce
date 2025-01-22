import { useEffect, useState } from "react"
import { Menu } from "../../components/buttons/btnMenu/Menu"
import "./sidebar.css"
import { SidebarContiner } from "../../containers/sidebar/SidebarContainer"
import { useLocation } from "react-router-dom"

type changeStateType = () => void

export const Sidebar = () =>{
    const location = useLocation()
    const [state, setState] = useState<boolean>(false)
    
    const changeState: changeStateType = ()=> setState(!state)
    const closeSidebar: changeStateType = ()=> setState(false)

    useEffect(()=>{
        closeSidebar()
    },[location])

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