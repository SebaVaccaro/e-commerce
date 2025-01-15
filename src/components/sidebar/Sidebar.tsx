
import { useState } from "react"
import { CategoryButton } from "../buttons/header/category/CategoryButton"
import "./sidebar.css"


export const Sidebar = () => {
    const [state, setState] = useState<boolean>(false)
    return (
        <div className="sidebar">
            {
                state? (
                    <div className="sidebar-on">
                        <div className="sidebar-category" >
                        </div>
                        <div className="sidebar-back" onClick={()=>setState(!state)}>
                        </div>
                    </div>
                    
                ): (
                    <div onClick={()=>setState(!state)}>
                        <CategoryButton />
                    </div>
                )
            }
        </div>
    )
}
